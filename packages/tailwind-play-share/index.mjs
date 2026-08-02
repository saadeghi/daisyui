#!/usr/bin/env node

import { spawn } from "node:child_process"
import { constants as fsConstants } from "node:fs"
import { access, mkdtemp, readFile, rm } from "node:fs/promises"
import { tmpdir } from "node:os"
import { delimiter, isAbsolute, join, resolve } from "node:path"
import { pathToFileURL } from "node:url"

const PLAY_URL = "https://play.tailwindcss.com/"
const DEFAULT_TIMEOUT_MS = 45_000

const usage = `Usage:
  bun packages/tailwind-play-share/index.mjs --html '<div>...</div>' --css '@import "tailwindcss";'
  bun packages/tailwind-play-share/index.mjs --html-file example.html --css-file example.css
  bun packages/tailwind-play-share/index.mjs '<div>...</div>' '@import "tailwindcss";'
  echo '{"html":"<div>...</div>","css":"..."}' | bun packages/tailwind-play-share/index.mjs

Options:
  --html <code>       HTML source
  --css <code>        CSS source
  --html-file <path>  Read HTML from a file
  --css-file <path>   Read CSS from a file
  --browser <path>    Chrome/Chromium executable
  --timeout <ms>      Timeout for each browser operation (default: ${DEFAULT_TIMEOUT_MS})
  --headed            Show the browser window
  --verbose           Write progress information to stderr
  --help              Show this help

The created Tailwind Play URL is the only value written to stdout.
Set TAILWIND_PLAY_BROWSER or CHROME_PATH to configure the browser without a flag.`

function takeValue(argv, index, flag) {
  const value = argv[index + 1]
  if (value === undefined) {
    throw new Error(`${flag} requires a value`)
  }
  return value
}

function parseArgs(argv) {
  const options = {
    browser: undefined,
    css: undefined,
    cssFile: undefined,
    headed: false,
    help: false,
    html: undefined,
    htmlFile: undefined,
    timeoutMs: DEFAULT_TIMEOUT_MS,
    verbose: false,
  }
  const positional = []

  for (let index = 0; index < argv.length; index += 1) {
    const argument = argv[index]

    switch (argument) {
      case "--html":
        options.html = takeValue(argv, index, argument)
        index += 1
        break
      case "--css":
        options.css = takeValue(argv, index, argument)
        index += 1
        break
      case "--html-file":
        options.htmlFile = takeValue(argv, index, argument)
        index += 1
        break
      case "--css-file":
        options.cssFile = takeValue(argv, index, argument)
        index += 1
        break
      case "--browser":
        options.browser = takeValue(argv, index, argument)
        index += 1
        break
      case "--timeout": {
        const timeout = Number(takeValue(argv, index, argument))
        if (!Number.isFinite(timeout) || timeout <= 0) {
          throw new Error("--timeout must be a positive number of milliseconds")
        }
        options.timeoutMs = timeout
        index += 1
        break
      }
      case "--headed":
        options.headed = true
        break
      case "--verbose":
        options.verbose = true
        break
      case "--help":
      case "-h":
        options.help = true
        break
      case "--":
        positional.push(...argv.slice(index + 1))
        index = argv.length
        break
      default:
        if (argument.startsWith("-")) {
          throw new Error(`Unknown option: ${argument}`)
        }
        positional.push(argument)
    }
  }

  if (options.html !== undefined && options.htmlFile !== undefined) {
    throw new Error("Use either --html or --html-file, not both")
  }
  if (options.css !== undefined && options.cssFile !== undefined) {
    throw new Error("Use either --css or --css-file, not both")
  }

  if (options.html === undefined && options.htmlFile === undefined && positional.length > 0) {
    options.html = positional.shift()
  }
  if (options.css === undefined && options.cssFile === undefined && positional.length > 0) {
    options.css = positional.shift()
  }
  if (positional.length > 0) {
    throw new Error("Too many positional arguments")
  }

  return options
}

async function readStdin() {
  let input = ""
  for await (const chunk of process.stdin) {
    input += chunk
  }
  return input
}

async function resolveInput(options) {
  let html = options.html
  let css = options.css

  if (options.htmlFile !== undefined) {
    html = await readFile(resolve(options.htmlFile), "utf8")
  }
  if (options.cssFile !== undefined) {
    css = await readFile(resolve(options.cssFile), "utf8")
  }

  if (html === undefined && css === undefined && !process.stdin.isTTY) {
    const stdin = (await readStdin()).trim()
    if (stdin) {
      let parsed
      try {
        parsed = JSON.parse(stdin)
      } catch (error) {
        throw new Error(`stdin must be JSON with html and css strings: ${error.message}`)
      }
      html = parsed.html
      css = parsed.css
    }
  }

  if (html === undefined && css === undefined) {
    throw new Error("Provide HTML/CSS using arguments, files, or JSON on stdin")
  }
  if (html !== undefined && typeof html !== "string") {
    throw new Error("html must be a string")
  }
  if (css !== undefined && typeof css !== "string") {
    throw new Error("css must be a string")
  }

  return { html: html ?? "", css: css ?? "" }
}

async function isExecutable(filePath) {
  try {
    await access(filePath, process.platform === "win32" ? fsConstants.F_OK : fsConstants.X_OK)
    return true
  } catch {
    return false
  }
}

async function resolveExecutable(candidate) {
  if (!candidate) return undefined

  if (isAbsolute(candidate) || candidate.includes("/") || candidate.includes("\\")) {
    const filePath = resolve(candidate)
    return (await isExecutable(filePath)) ? filePath : undefined
  }

  const extensions = process.platform === "win32" ? ["", ".exe", ".cmd"] : [""]
  for (const directory of (process.env.PATH ?? "").split(delimiter)) {
    if (!directory) continue
    for (const extension of extensions) {
      const filePath = join(directory, `${candidate}${extension}`)
      if (await isExecutable(filePath)) return filePath
    }
  }

  return undefined
}

async function findBrowser(explicitBrowser) {
  const configured =
    explicitBrowser ??
    process.env.TAILWIND_PLAY_BROWSER ??
    process.env.CHROME_PATH ??
    process.env.PLAYWRIGHT_CHROMIUM_EXECUTABLE_PATH ??
    process.env.PUPPETEER_EXECUTABLE_PATH

  if (configured) {
    const executable = await resolveExecutable(configured)
    if (!executable) {
      throw new Error(`Browser executable not found or not executable: ${configured}`)
    }
    return executable
  }

  const platformCandidates = {
    darwin: [
      "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
      "/Applications/Chromium.app/Contents/MacOS/Chromium",
      "/Applications/Google Chrome Canary.app/Contents/MacOS/Google Chrome Canary",
      "/Applications/Microsoft Edge.app/Contents/MacOS/Microsoft Edge",
    ],
    linux: [
      "google-chrome",
      "google-chrome-stable",
      "chromium",
      "chromium-browser",
      "microsoft-edge",
    ],
    win32: [
      process.env.LOCALAPPDATA &&
        join(process.env.LOCALAPPDATA, "Google", "Chrome", "Application", "chrome.exe"),
      process.env.PROGRAMFILES &&
        join(process.env.PROGRAMFILES, "Google", "Chrome", "Application", "chrome.exe"),
      process.env["PROGRAMFILES(X86)"] &&
        join(process.env["PROGRAMFILES(X86)"], "Google", "Chrome", "Application", "chrome.exe"),
    ].filter(Boolean),
  }

  for (const candidate of platformCandidates[process.platform] ?? []) {
    const executable = await resolveExecutable(candidate)
    if (executable) return executable
  }

  throw new Error(
    "Chrome or Chromium was not found. Set TAILWIND_PLAY_BROWSER or pass --browser <path>.",
  )
}

const delay = (milliseconds) =>
  new Promise((resolvePromise) => setTimeout(resolvePromise, milliseconds))

async function waitForDebuggingPort(profileDirectory, browserProcess, timeoutMs, getSpawnError) {
  const activePortFile = join(profileDirectory, "DevToolsActivePort")
  const deadline = Date.now() + timeoutMs

  while (Date.now() < deadline) {
    const spawnError = getSpawnError()
    if (spawnError) {
      throw new Error(`Could not start the browser: ${spawnError.message}`)
    }
    if (browserProcess.exitCode !== null) {
      throw new Error(`Browser exited before starting (exit code ${browserProcess.exitCode})`)
    }

    try {
      const [portText] = (await readFile(activePortFile, "utf8")).trim().split(/\r?\n/)
      const port = Number(portText)
      if (Number.isInteger(port) && port > 0) return port
    } catch {
      // Chrome creates this file after its DevTools server is ready.
    }

    await delay(50)
  }

  throw new Error("Timed out while starting Chrome's DevTools server")
}

async function launchBrowser(executable, { headed, profileDirectory, timeoutMs }) {
  const args = [
    "--remote-debugging-port=0",
    "--remote-allow-origins=*",
    `--user-data-dir=${profileDirectory}`,
    "--no-first-run",
    "--no-default-browser-check",
    "--disable-background-networking",
    "--disable-component-update",
    "--disable-default-apps",
    "--disable-extensions",
    "--disable-sync",
    "--metrics-recording-only",
    "--mute-audio",
    "--window-size=1440,1000",
  ]

  if (!headed) args.push("--headless=new")
  if (typeof process.getuid === "function" && process.getuid() === 0) args.push("--no-sandbox")
  args.push("about:blank")

  const browserProcess = spawn(executable, args, {
    stdio: ["ignore", "ignore", "pipe"],
  })
  let stderr = ""
  let spawnError
  browserProcess.stderr.setEncoding("utf8")
  browserProcess.stderr.on("data", (chunk) => {
    stderr = `${stderr}${chunk}`.slice(-8_000)
  })

  browserProcess.on("error", (error) => {
    spawnError = error
  })

  try {
    const port = await waitForDebuggingPort(
      profileDirectory,
      browserProcess,
      timeoutMs,
      () => spawnError,
    )
    return { browserProcess, port, stderr: () => stderr }
  } catch (error) {
    browserProcess.kill("SIGTERM")
    const details = stderr.trim()
    throw new Error(details ? `${error.message}\n${details}` : error.message)
  }
}

async function stopBrowser(browserProcess) {
  if (!browserProcess || browserProcess.exitCode !== null) return

  browserProcess.kill("SIGTERM")
  await Promise.race([
    new Promise((resolvePromise) => browserProcess.once("exit", resolvePromise)),
    delay(2_000),
  ])

  if (browserProcess.exitCode === null) {
    browserProcess.kill("SIGKILL")
    await new Promise((resolvePromise) => browserProcess.once("exit", resolvePromise))
  }
}

class CdpClient {
  constructor(webSocketUrl) {
    this.nextId = 1
    this.pending = new Map()
    this.socket = new WebSocket(webSocketUrl)
    this.ready = new Promise((resolveReady, rejectReady) => {
      this.socket.addEventListener("open", resolveReady, { once: true })
      this.socket.addEventListener(
        "error",
        () => rejectReady(new Error("Could not connect to Chrome's DevTools socket")),
        { once: true },
      )
    })

    this.socket.addEventListener("message", (event) => {
      let data = event.data
      if (data instanceof ArrayBuffer) data = new TextDecoder().decode(data)
      if (ArrayBuffer.isView(data)) data = new TextDecoder().decode(data)

      const message = JSON.parse(String(data))
      if (!message.id) return

      const pending = this.pending.get(message.id)
      if (!pending) return
      this.pending.delete(message.id)

      if (message.error) {
        pending.reject(new Error(`${pending.method}: ${message.error.message}`))
      } else {
        pending.resolve(message.result)
      }
    })

    this.socket.addEventListener("close", () => {
      for (const pending of this.pending.values()) {
        pending.reject(new Error("Chrome's DevTools socket closed unexpectedly"))
      }
      this.pending.clear()
    })
  }

  async send(method, params = {}) {
    await this.ready
    const id = this.nextId
    this.nextId += 1

    const result = new Promise((resolveResult, rejectResult) => {
      this.pending.set(id, { method, reject: rejectResult, resolve: resolveResult })
    })

    this.socket.send(JSON.stringify({ id, method, params }))
    return result
  }

  close() {
    if (this.socket.readyState === WebSocket.OPEN) this.socket.close()
  }
}

async function getPageWebSocketUrl(port) {
  const endpoint = `http://127.0.0.1:${port}`
  let response = await fetch(`${endpoint}/json/list`)
  if (!response.ok) throw new Error(`Chrome target discovery failed with HTTP ${response.status}`)

  let targets = await response.json()
  let page = targets.find((target) => target.type === "page" && target.webSocketDebuggerUrl)

  if (!page) {
    response = await fetch(`${endpoint}/json/new?${encodeURIComponent("about:blank")}`, {
      method: "PUT",
    })
    if (!response.ok) throw new Error(`Chrome page creation failed with HTTP ${response.status}`)
    page = await response.json()
  }

  if (!page.webSocketDebuggerUrl) throw new Error("Chrome did not expose a page DevTools socket")
  return page.webSocketDebuggerUrl
}

async function evaluate(client, expression) {
  const response = await client.send("Runtime.evaluate", {
    awaitPromise: true,
    expression,
    returnByValue: true,
    userGesture: true,
  })

  if (response.exceptionDetails) {
    const description =
      response.exceptionDetails.exception?.description ??
      response.exceptionDetails.text ??
      "Unknown page evaluation error"
    throw new Error(description)
  }

  return response.result?.value
}

async function waitForPageValue(client, expression, timeoutMs, label) {
  const deadline = Date.now() + timeoutMs
  let lastValue

  while (Date.now() < deadline) {
    lastValue = await evaluate(client, expression)
    if (lastValue) return lastValue
    await delay(100)
  }

  throw new Error(
    `Timed out waiting for ${label}${lastValue ? `: ${JSON.stringify(lastValue)}` : ""}`,
  )
}

const clipboardCaptureScript = String.raw`
(() => {
  const remember = (value) => {
    if (value !== undefined && value !== null) {
      globalThis.__tailwindPlaySharedUrl = String(value);
    }
  };

  try {
    const clipboard = navigator.clipboard;
    const prototype = clipboard && Object.getPrototypeOf(clipboard);
    const originalWriteText = prototype?.writeText;
    if (typeof originalWriteText === "function") {
      Object.defineProperty(prototype, "writeText", {
        configurable: true,
        value: async function (value) {
          remember(value);
          globalThis.__tailwindPlayClipboardWriteSucceeded = false;
          try {
            const result = await originalWriteText.call(this, value);
            globalThis.__tailwindPlayClipboardWriteSucceeded = true;
            return result;
          } catch {
            // Capturing the value is enough for Tailwind Play's Share action.
          }
        },
        writable: true,
      });
    }
  } catch {}

  try {
    Object.defineProperty(Navigator.prototype, "share", {
      configurable: true,
      value: async (data) => remember(data?.url ?? data?.text),
      writable: true,
    });
  } catch {}
})();`

async function waitForEditor(client, timeoutMs) {
  return waitForPageValue(
    client,
    String.raw`(() => {
      const models = globalThis.monaco?.editor?.getModels?.() ?? [];
      if (models.length >= 2) return "monaco";

      const visible = (element) => {
        const rect = element.getBoundingClientRect();
        const style = getComputedStyle(element);
        return rect.width > 0 && rect.height > 0 && style.visibility !== "hidden" && style.display !== "none";
      };
      const labels = [...document.querySelectorAll("button,[role=tab]")]
        .filter(visible)
        .map((element) => element.textContent?.trim().toLowerCase());
      return labels.includes("html") && labels.includes("css") ? "ui" : "";
    })()`,
    timeoutMs,
    "the Tailwind Play editor",
  )
}

async function setWithMonaco(client, html, css) {
  return evaluate(
    client,
    `(() => {
      const editor = globalThis.monaco?.editor;
      if (!editor?.getModels) return { ok: false, reason: "Monaco is not globally accessible" };

      const models = editor.getModels();
      const describe = (model) => {
        const language = model.getLanguageId?.() ?? "";
        const uri = model.uri?.toString?.() ?? "";
        return { language, uri };
      };
      const matches = (model, kind) => {
        const { language, uri } = describe(model);
        const value = (language + " " + uri).toLowerCase();
        return kind === "html"
          ? language.toLowerCase() === "html" || /(?:^|[/.])html(?:$|[?#])|\\.html(?:$|[?#])/.test(value)
          : language.toLowerCase() === "css" || /(?:^|[/.])css(?:$|[?#])|\\.css(?:$|[?#])/.test(value);
      };

      const htmlModel = models.find((model) => matches(model, "html"));
      const cssModel = models.find((model) => matches(model, "css"));
      if (!htmlModel || !cssModel) {
        return { ok: false, models: models.map(describe), reason: "HTML/CSS models were not found" };
      }

      htmlModel.setValue(${JSON.stringify(html)});
      cssModel.setValue(${JSON.stringify(css)});
      return { ok: true };
    })()`,
  )
}

async function clickEditorTab(client, label) {
  const clicked = await evaluate(
    client,
    `(() => {
      const normalize = (value) => value?.replace(/\\s+/g, " ").trim().toLowerCase() ?? "";
      const visible = (element) => {
        const rect = element.getBoundingClientRect();
        const style = getComputedStyle(element);
        return rect.width > 0 && rect.height > 0 && style.visibility !== "hidden" && style.display !== "none";
      };
      const target = [...document.querySelectorAll("button,[role=tab]")]
        .filter(visible)
        .find((element) => normalize(element.textContent) === ${JSON.stringify(label.toLowerCase())});
      if (!target) return false;
      target.click();
      return true;
    })()`,
  )

  if (!clicked) throw new Error(`Could not find Tailwind Play's ${label} editor tab`)
  await delay(150)
}

async function focusVisibleEditor(client, label, timeoutMs) {
  const deadline = Date.now() + timeoutMs
  let target

  do {
    target = await evaluate(
      client,
      `(() => {
      const normalize = (value) => value?.replace(/\\s+/g, " ").trim().toLowerCase() ?? "";
      const visible = (element) => {
        const rect = element.getBoundingClientRect();
        const style = getComputedStyle(element);
        return rect.width > 0 && rect.height > 0 && style.visibility !== "hidden" && style.display !== "none";
      };

      const tab = [...document.querySelectorAll("button,[role=tab]")]
        .filter(visible)
        .find((element) => normalize(element.textContent) === ${JSON.stringify(label.toLowerCase())});
      const controlledPanelId = tab?.getAttribute("aria-controls");
      const controlledPanel = controlledPanelId ? document.getElementById(controlledPanelId) : null;
      const selectedPanel = document.querySelector(
        '[role="tabpanel"]:not([hidden]),[role="tabpanel"][data-state="active"]',
      );
      const panel = [controlledPanel, selectedPanel].find((element) => element && visible(element));
      const scope = panel ?? document;

      const focusables = [
        ...scope.querySelectorAll(
          '.monaco-editor textarea,textarea.inputarea,.ace_text-input,.cm-content,[role="textbox"],textarea,[contenteditable]',
        ),
      ];
      const scoredFocusables = focusables
        .map((element) => {
          const host =
            element.closest('.monaco-editor,.cm-editor,.ace_editor,[role="tabpanel"]') ??
            element.parentElement ??
            element;
          const hostVisible = visible(host);
          let score = hostVisible ? 1_000 : 0;
          if (panel?.contains(element)) score += 10_000;
          if (element.matches('.cm-content,.ace_text-input,.monaco-editor textarea')) score += 2_000;
          if (element.getAttribute("role") === "textbox") score += 500;
          return { element, score };
        })
        .filter(({ score }) => score > 0)
        .sort((left, right) => right.score - left.score);

      const focusable = scoredFocusables[0]?.element;
      if (focusable) {
        try {
          focusable.focus({ preventScroll: true });
        } catch {
          focusable.focus();
        }
        const root = focusable.getRootNode();
        if (document.activeElement === focusable || root.activeElement === focusable) {
          return { focused: true, ok: true };
        }
      }

      const surfaces = [
        ...scope.querySelectorAll(
          '.monaco-editor,.cm-editor,.ace_editor,[data-testid*="editor" i],[class*="code-editor" i]',
        ),
      ];
      if (panel) surfaces.push(panel);
      const surface = surfaces
        .filter(visible)
        .map((element) => ({ element, rect: element.getBoundingClientRect() }))
        .filter(({ rect }) => rect.width >= 40 && rect.height >= 40)
        .sort((left, right) => left.rect.width * left.rect.height - right.rect.width * right.rect.height)[0];

      if (surface) {
        return {
          focused: false,
          ok: true,
          x: surface.rect.left + Math.min(100, surface.rect.width / 4),
          y: surface.rect.top + Math.min(100, surface.rect.height / 4),
        };
      }

      const diagnostics = [
        ...document.querySelectorAll(
          'textarea,[contenteditable],[role="textbox"],.monaco-editor,.cm-editor,.ace_editor,[role="tabpanel"],iframe',
        ),
      ].slice(0, 30).map((element) => {
        const rect = element.getBoundingClientRect();
        return {
          className: typeof element.className === "string" ? element.className.slice(0, 120) : "",
          contenteditable: element.getAttribute("contenteditable"),
          height: Math.round(rect.height),
          role: element.getAttribute("role"),
          tag: element.tagName.toLowerCase(),
          width: Math.round(rect.width),
        };
      });
      return { diagnostics, ok: false };
      })()`,
    )
    if (!target?.ok) await delay(100)
  } while (!target?.ok && Date.now() < deadline)

  if (!target?.ok) return target
  if (!target.focused) {
    await client.send("Input.dispatchMouseEvent", {
      button: "left",
      clickCount: 1,
      type: "mousePressed",
      x: target.x,
      y: target.y,
    })
    await client.send("Input.dispatchMouseEvent", {
      button: "left",
      clickCount: 1,
      type: "mouseReleased",
      x: target.x,
      y: target.y,
    })
    await delay(50)
  }
  return target
}

async function replaceActiveEditor(client, source) {
  const modifiers = process.platform === "darwin" ? 4 : 2
  await client.send("Input.dispatchKeyEvent", {
    code: "KeyA",
    commands: ["selectAll"],
    key: "a",
    modifiers,
    nativeVirtualKeyCode: 65,
    type: "keyDown",
    windowsVirtualKeyCode: 65,
  })
  await client.send("Input.dispatchKeyEvent", {
    code: "KeyA",
    key: "a",
    modifiers,
    nativeVirtualKeyCode: 65,
    type: "keyUp",
    windowsVirtualKeyCode: 65,
  })

  const pasteResult = await evaluate(
    client,
    `(() => {
      let target = document.activeElement;
      while (target?.shadowRoot?.activeElement) {
        target = target.shadowRoot.activeElement;
      }
      if (!target || target === document.body || target === document.documentElement) {
        return { activeElement: target?.tagName?.toLowerCase() ?? "none", ok: false };
      }

      try {
        const clipboardData = new DataTransfer();
        clipboardData.setData("text/plain", ${JSON.stringify(source)});
        const event = new ClipboardEvent("paste", {
          bubbles: true,
          cancelable: true,
          clipboardData,
          composed: true,
        });
        const dispatched = target.dispatchEvent(event);
        return {
          activeElement: target.tagName.toLowerCase(),
          className: typeof target.className === "string" ? target.className.slice(0, 120) : "",
          ok: !dispatched || event.defaultPrevented,
        };
      } catch (error) {
        return {
          activeElement: target.tagName.toLowerCase(),
          error: error?.message ?? String(error),
          ok: false,
        };
      }
    })()`,
  )
  if (!pasteResult?.ok) {
    throw new Error(
      `Tailwind Play's editor did not accept the paste event: ${JSON.stringify(pasteResult)}`,
    )
  }
}

async function setWithEditorUi(client, html, css, timeoutMs) {
  for (const [label, source] of [
    ["HTML", html],
    ["CSS", css],
  ]) {
    await clickEditorTab(client, label)
    const focusResult = await focusVisibleEditor(client, label, timeoutMs)
    if (!focusResult?.ok) {
      const diagnostics = focusResult?.diagnostics?.length
        ? ` Editor DOM: ${JSON.stringify(focusResult.diagnostics)}`
        : ""
      throw new Error(`Could not focus Tailwind Play's ${label} editor.${diagnostics}`)
    }
    await replaceActiveEditor(client, source)
    await delay(150)
  }
}

function extractSharedUrl(value) {
  if (typeof value !== "string") return undefined
  const match = value.match(/https:\/\/play\.tailwindcss\.com\/[^\s"'<>]+/i)
  if (!match) return undefined

  try {
    const url = new URL(match[0])
    const hasShareIdentifier = url.pathname !== "/" || url.search !== "" || url.hash !== ""
    return url.hostname === "play.tailwindcss.com" && hasShareIdentifier ? url.href : undefined
  } catch {
    return undefined
  }
}

async function clickShare(client) {
  const result = await evaluate(
    client,
    String.raw`(() => {
      const normalize = (value) => value?.replace(/\s+/g, " ").trim().toLowerCase() ?? "";
      const visible = (element) => {
        const rect = element.getBoundingClientRect();
        const style = getComputedStyle(element);
        return rect.width > 0 && rect.height > 0 && style.visibility !== "hidden" && style.display !== "none";
      };
      const candidates = [...document.querySelectorAll("button,a,[role=button]")].filter(visible);
      const target =
        candidates.find((element) =>
          [element.getAttribute("aria-label"), element.getAttribute("title")]
            .map(normalize)
            .includes("share"),
        ) ??
        candidates.find((element) => normalize(element.textContent) === "share") ??
        candidates.find((element) => normalize(element.textContent).startsWith("share")) ??
        candidates.find((element) =>
          [element.textContent, element.getAttribute("aria-label"), element.getAttribute("title")]
            .map(normalize)
            .some((value) => /\bshare\b/.test(value)),
        );
      if (!target) {
        return {
          ok: false,
          labels: candidates
            .map((element) => normalize(element.textContent || element.getAttribute("aria-label")))
            .filter(Boolean)
            .slice(0, 30),
        };
      }
      target.click();
      return { ok: true };
    })()`,
  )

  if (!result?.ok) {
    throw new Error(
      `Could not find Tailwind Play's Share button. Visible controls: ${result?.labels?.join(", ") || "none"}`,
    )
  }
}

async function readShareState(client) {
  return evaluate(
    client,
    String.raw`(() => {
      const visible = (element) => {
        const rect = element.getBoundingClientRect();
        const style = getComputedStyle(element);
        return rect.width > 0 && rect.height > 0 && style.visibility !== "hidden" && style.display !== "none";
      };
      const values = [...document.querySelectorAll("input,textarea")]
        .filter(visible)
        .map((element) => element.value)
        .filter((value) => typeof value === "string" && value.includes("play.tailwindcss.com"));
      const alerts = [...document.querySelectorAll('[role="alert"]')]
        .filter(visible)
        .map((element) => element.textContent?.trim())
        .filter(Boolean);
      return {
        alerts,
        copied: globalThis.__tailwindPlaySharedUrl ?? "",
        href: location.href,
        values,
      };
    })()`,
  )
}

async function clickCopyControl(client) {
  return evaluate(
    client,
    String.raw`(() => {
      const normalize = (value) => value?.replace(/\s+/g, " ").trim().toLowerCase() ?? "";
      const visible = (element) => {
        const rect = element.getBoundingClientRect();
        const style = getComputedStyle(element);
        return rect.width > 0 && rect.height > 0 && style.visibility !== "hidden" && style.display !== "none";
      };
      const target = [...document.querySelectorAll("button,[role=button]")]
        .filter(visible)
        .find((element) => /^(copy|copy link|copy url)$/.test(normalize(element.textContent || element.getAttribute("aria-label"))));
      if (!target) return false;
      target.click();
      return true;
    })()`,
  )
}

async function waitForSharedUrl(client, initialUrl, timeoutMs) {
  const deadline = Date.now() + timeoutMs
  let clickedCopy = false
  let lastState

  while (Date.now() < deadline) {
    lastState = await readShareState(client)
    const candidates = [lastState.copied, ...lastState.values, lastState.href]
    for (const candidate of candidates) {
      const url = extractSharedUrl(candidate)
      if (url && url !== initialUrl) return url
    }

    if (!clickedCopy && Date.now() + 500 < deadline) {
      clickedCopy = await clickCopyControl(client)
    }
    await delay(150)
  }

  const alertText = lastState?.alerts?.length
    ? ` Tailwind Play reported: ${lastState.alerts.join(" ")}`
    : ""
  throw new Error(`Timed out waiting for Tailwind Play to create a share URL.${alertText}`)
}

export async function createTailwindPlay({
  browser,
  css = "",
  headed = false,
  html = "",
  timeoutMs = DEFAULT_TIMEOUT_MS,
  verbose = false,
}) {
  if (typeof WebSocket !== "function") {
    throw new Error(
      "This dependency-free script requires Node.js 22 or newer (global WebSocket support)",
    )
  }

  const log = (...values) => {
    if (verbose) console.error(...values)
  }
  const executable = await findBrowser(browser)
  const profileDirectory = await mkdtemp(join(tmpdir(), "tailwind-play-share-"))
  let browserProcess
  let client

  try {
    log(`Starting ${executable}`)
    const launched = await launchBrowser(executable, { headed, profileDirectory, timeoutMs })
    browserProcess = launched.browserProcess

    client = new CdpClient(await getPageWebSocketUrl(launched.port))
    await client.send("Page.enable")
    await client.send("Runtime.enable")
    await client
      .send("Browser.grantPermissions", {
        origin: new URL(PLAY_URL).origin,
        permissions: ["clipboardReadWrite", "clipboardSanitizedWrite"],
      })
      .catch(() => {})
    await client.send("Page.addScriptToEvaluateOnNewDocument", { source: clipboardCaptureScript })

    log(`Opening ${PLAY_URL}`)
    await client.send("Page.navigate", { url: PLAY_URL })
    await waitForPageValue(
      client,
      'document.readyState === "complete" ? location.href : ""',
      timeoutMs,
      "Tailwind Play to load",
    )
    await waitForEditor(client, timeoutMs)

    const monacoResult = await setWithMonaco(client, html, css)
    if (!monacoResult?.ok) {
      log(`Using keyboard editor fallback: ${monacoResult?.reason ?? "unknown reason"}`)
      await setWithEditorUi(client, html, css, timeoutMs)
    }

    // Tailwind Play persists editor updates asynchronously before creating a share.
    await delay(750)
    const initialUrl = await evaluate(client, "location.href")
    log("Creating share URL")
    await clickShare(client)
    return await waitForSharedUrl(client, initialUrl, timeoutMs)
  } finally {
    client?.close()
    await stopBrowser(browserProcess)
    await rm(profileDirectory, { force: true, recursive: true })
  }
}

async function main() {
  const options = parseArgs(process.argv.slice(2))
  if (options.help) {
    console.log(usage)
    return
  }

  const { html, css } = await resolveInput(options)
  const url = await createTailwindPlay({ ...options, html, css })
  console.log(url)
}

const isMain =
  process.argv[1] !== undefined && import.meta.url === pathToFileURL(resolve(process.argv[1])).href

if (isMain) {
  main().catch((error) => {
    console.error(`tailwind-play-share: ${error.message}`)
    process.exitCode = 1
  })
}
