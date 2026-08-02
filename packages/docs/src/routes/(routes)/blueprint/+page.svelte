<script>
  import { PUBLIC_DAISYUI_API_PATH } from "$env/static/public"
  import DiscountCountdown from "$components/DiscountCountdown.svelte"
  import SEO from "$components/SEO.svelte"
  import StoreFooter from "$components/StoreFooter.svelte"
  import Countdown from "svelte-countdown"
  import { onMount, tick } from "svelte"
  import { fade, fly } from "svelte/transition"
  import { t } from "$lib/i18n.svelte.js"
  import { isDiscountApplicableToBlueprint } from "$lib/storeDiscount.js"

  // Dynamic card copy also appears in an excluded blog route; keep it registered here.
  // $t("Installing daisyUI")

  const checkoutUrl = "/blueprint/checkout/"

  const pricingPlans = [
    {
      slug: "monthly",
      name: "1 Month",
      price: "$22",
      cadence: "/ month",
      summary: "Billed every month",
      billing: "cancel anytime",
      features: [
        "All features",
        "3 day free trial",
        "For up to 2 clients",
        "Updates and new features included",
      ],
      cta: "Start trial",
      href: "https://www.creem.io/payment/prod_5E7U1fS3URoEtdjqJr3R9d",
      popular: false,
    },
    {
      slug: "quarterly",
      name: "3 Month",
      price: "$45",
      cadence: "/ quarter",
      summary: "Billed every 3 months",
      billing: "cancel anytime",
      features: [
        "All features",
        "3 day free trial",
        "For up to 5 clients",
        "Updates and new features included",
      ],
      cta: "Start trial",
      href: "https://www.creem.io/payment/prod_4EC2CMwyCoPAeJ6GhKabZd",
      popular: true,
    },
    {
      slug: "lifetime",
      name: "Lifetime",
      price: "$600",
      cadence: "",
      summary: "One-time purchase",
      billing: "Use forever, without limits",
      features: ["All features", "For up to 20 clients", "Updates and new features included"],
      cta: "Get lifetime access",
      href: "https://www.creem.io/payment/prod_7bSjj3UImBhfsYHclXQHt4",
      popular: false,
    },
  ]

  const expertRoles = [
    {
      number: "01",
      icon: "https://img.daisyui.com/images/emoji/1280_mage_1f9d9.png",
      name: "Setup Expert",
      terminalName: "daisyUI Setup Expert",
      requirement: "Mandatory",
      output: "Installed daisyUI; added themes, icons, and fonts.",
      description:
        "Reads the repo first. It understands dependencies, framework, configuration, themes, colors, fonts, icons, and file structure before your agent changes a pixel.",
      detail:
        "Your agent gets the daisyUI install instructions, daisyUI config, and daisyUI custom theme setup when needed.",
      cards: ["Installing daisyUI", "Adding custom theme, fonts and icons"],
    },
    {
      number: "02",
      icon: "https://img.daisyui.com/images/emoji/1040_woman-police-officer_1f46e-200d-2640-fe0f.png",
      name: "Rules Enforcer",
      terminalName: "daisyUI Rules Enforcer",
      requirement: "Mandatory",
      output: "53 implementation rules loaded.",
      description:
        "Loads implementation, syntax, accessibility, responsive, theme, media, and quality rules as requirements your LLM must follow.",
      detail:
        "The workflow cannot continue by skimming half a skill file and quietly dropping the difficult constraints.",
      cards: ["Enforced design rules and code instructions"],
    },
    {
      number: "03",
      icon: "https://img.daisyui.com/images/emoji/0960_artist_1f9d1-200d-1f3a8.png",
      name: "Creative Director",
      terminalName: "daisyUI Creative Director",
      requirement: "Creative direction",
      output: "71 creative design principles loaded.",
      description:
        "Directs UX, content, originality, color, composition, typography, imagery, design trends, and motion as one coherent idea.",
      detail:
        "Instead of another purple-gradient template, the page gets a point of view connected to its product and audience.",
      cards: [
        "Applied creative design rules",
        "Applied UI/UX principles",
        "Applied an appropriate design trend",
      ],
    },
    {
      number: "04",
      icon: "https://img.daisyui.com/images/emoji/0800_woman-teacher_1f469-200d-1f3eb.png",
      name: "Page Architect",
      terminalName: "daisyUI Page Architect",
      requirement: "Architecture",
      output: "Found 211 page architectures. Chose 'Mobile App Landing Page'.",
      description:
        "Chooses from 211 page architectures covering purpose, structure, content, goals, states, edge cases, and component composition.",
      detail:
        "Your LLM stops guessing what belongs on the page. It gets a production plan shaped around the job the page must do.",
      cards: ["Accessing page architecture library", "Finding the best layout structure"],
    },
    {
      number: "05",
      icon: "https://img.daisyui.com/images/emoji/0880_technologist_1f9d1-200d-1f4bb.png",
      name: "Component Syntax Expert",
      terminalName: "daisyUI Component Syntax Expert",
      requirement: "Mandatory",
      output: "Found 68 daisyUI components and used 17 code snippets.",
      description:
        "Retrieves exact, correct daisyUI component structures, variants, code snippets, and examples only when the page needs them.",
      detail:
        "No stale syntax from model memory. No utility pile pretending to be a maintained component.",
      cards: ["Received daisyUI components and rules", "Received code snippets and examples"],
    },
    {
      number: "06",
      icon: "https://img.daisyui.com/images/emoji/1040_detective_1f575-fe0f.png",
      name: "Quality Inspector",
      terminalName: "daisyUI Quality Inspector",
      requirement: "Final gate",
      output: "Passed: 100/100. Errors: 0.",
      description:
        "Audits the finished source for visual problems, syntax errors, accessibility issues, responsive failures, and ignored rules.",
      detail:
        "When the inspection finds a problem, your agent has to fix it before the workflow can call the page finished.",
      cards: ["Fixed syntax issues", "Fixed visual design problems"],
    },
  ]

  const codingTools = [
    {
      name: "Claude Code",
      slug: "claude-code",
      icon: "claude-code",
      agent: "claude-code",
    },
    {
      name: "Codex",
      slug: "codex",
      icon: "codex",
      agent: "codex",
    },
    {
      name: "Grok Build",
      slug: "grok",
      icon: "grok",
      agent: "grok",
    },
    {
      name: "VS Code Copilot",
      slug: "copilot",
      icon: "copilot",
      agent: "github-copilot",
    },
    {
      name: "Cursor",
      slug: "cursor",
      icon: "cursor",
      agent: "cursor",
    },
    {
      name: "OpenCode",
      slug: "opencode",
      icon: "opencode",
      agent: "opencode",
    },
    {
      name: "Antigravity",
      slug: "antigravity",
      icon: "antigravity",
      agent: "antigravity",
    },
  ]

  const blueprintPreviewBaseUrl = "https://img.daisyui.com/images/blueprint"
  const blueprintPreviewPngUrl = (file) =>
    `${blueprintPreviewBaseUrl}/lg/${file.replace(/\.avif$/, ".png")}`
  const blueprintPreviews = [
    {
      file: "front-end-skill.avif",
      alt: "Front-end skill",
      prompt: "Make an admin dashboard for server management with Retro-Futurism style",
      model: "GPT 5.6",
    },
    {
      file: "ui-skills.avif",
      alt: "UI skills",
      prompt: "Make an email client UI with clean design",
      model: "GPT 5.6",
    },
    {
      file: "daisyui-skill.avif",
      alt: "daisyUI skill",
      prompt: "Make a dense Japanese news website with Maximalism style",
      model: "GPT 5.6",
    },
    {
      file: "ui-design-agent.avif",
      alt: "UI design agent",
      prompt: "Make a product management dashboard for managing SaaS businesses",
      model: "GPT 5.6",
    },
    {
      file: "design-website-with-codex.avif",
      alt: "Design website with Codex",
      prompt: "Make an online shop with Skeuomorphism design for selling gaming headphones",
      model: "GPT 5.6",
    },
    {
      file: "ai-site-maker.avif",
      alt: "AI site maker",
      prompt: "Make a landing page for a cute cafe in Seul",
      model: "GPT 5.6",
    },
    {
      file: "tailwind-css-skill.avif",
      alt: "Tailwind CSS skill",
      prompt: "Make an event website for a dev confrence in Tokyo",
      model: "GPT 5.6",
    },
    {
      file: "best-ui-design-skill.avif",
      alt: "Best UI design skill",
      prompt: "Make a Swiss design style landingpage for a nordic style furniture manifacturer",
      model: "GPT 5.6",
    },
    {
      file: "front-end-agent.avif",
      alt: "Front-end agent",
      prompt: "Make an artistic personal site for a photographer",
      model: "GPT 5.6",
    },
  ]

  const conversionTools = [
    {
      title: "Figma to daisyUI",
      label: "Figma API",
      description:
        "Reads frames, hierarchy, auto layout, type, color, component instances, and a rendered preview before matching daisyUI patterns.",
      toolName: "Works with Figma API",
      input: "Figma / Checkout / Payment form",
      output: "daisyUI / card + fieldset + input + button",
    },
    {
      title: "Tailwind CSS to daisyUI",
      label: "Utility audit",
      description:
        "Preserves layout and behavior while replacing hand-built component utility stacks with current daisyUI structures.",
      toolName: "daisyui_prompt_tailwind_to_daisyui",
      input: "27 utilities / custom card pattern",
      output: "daisyUI / card card-border",
    },
    {
      title: "Screenshot to daisyUI",
      label: "Visual reference",
      description:
        "Analyzes hierarchy, density, states, and responsive clues, then rebuilds the reference with accessible daisyUI components.",
      toolName: "daisyui_prompt_screenshot_to_daisyui",
      input: "Screenshot / Settings / 1440 × 1024",
      output: "daisyUI / responsive settings page",
    },
    {
      title: "Bootstrap to daisyUI",
      label: "Framework migration",
      description:
        "Maps Bootstrap components to daisyUI while keeping the content, semantics, structure, and interaction model intact.",
      toolName: "daisyui_prompt_bootstrap_to_daisyui",
      input: "Bootstrap / .card .btn .form-control",
      output: "daisyUI / card btn input",
    },
    {
      title: "Image to daisyUI theme",
      label: "Palette mapping",
      description:
        "Extracts an image palette, assigns semantic roles, calculates readable content colors, and generates every required daisyUI theme variable.",
      input: "Image / color palette",
      output: "daisyUI / complete semantic theme",
    },
  ]

  const compareTable = [
    [
      "",
      "daisyUI <div class='-my-1 inline-grid grid-cols-[.25rem_1fr_.25rem] grid-rows-[.25rem_1fr_.25rem] align-middle'><div class='border-s border-t border-blue-600 [grid-area:1/1/2/2]'></div><div class='border-e border-t border-blue-600 [grid-area:1/3/2/4]'></div><div class='border-s border-b border-blue-600 [grid-area:3/1/4/2]'></div><div class='border-e border-b border-blue-600 [grid-area:3/3/4/4]'></div><div class='font-title m-0.5 bg-blue-600 px-1 text-sm font-semibold tracking-wide text-white [grid-area:1/1/4/4]'>BLUEPRINT</div></div> MCP",
      "daisyUI Skill",
      "Context7 MCP",
      "GitMCP",
    ],
    ["daisyUI Official", true, true, false, false],
    [
      "Fine-tuned for daisyUI",
      true,
      true,
      "<span class='text-error'>Impossible to fine-tune</span>",
      "<span class='text-error'>Impossible to fine-tune</span>",
    ],
    [
      "Data source",
      "<span class='text-success'>Authored & verified</span>",
      "<span class='text-success'>Authored & verified</span>",
      "<span class='text-error'>AI-generated</span>",
      "<span class='text-error'>AI-generated</span>",
    ],
    [
      "Resource accuracy",
      "<span class='text-success'>100% accurate</span>",
      "<span class='text-success'>100% accurate</span>",
      "<span class='text-error'>Confuses random repos</span>",
      "<span class='text-error'>Confuses random pages</span>",
    ],
    [
      "Includes unwanted context",
      "<span class='text-success'>No</span>",
      "<span class='text-error'>Depends on the LLM</span>",
      "<span class='text-error'>Yes</span>",
      "<span class='text-error'>Yes</span>",
    ],
    ["Creative direction", true, false, false, false],
    ["211 page architectures", true, false, false, false],
    ["Design trends catalog", true, false, false, false],
    ["Code snippets", true, false, false, false],
    ["Quality inspection", true, false, false, false],
    ["daisyUI design system specs", true, true, false, false],
    ["Converts Figma to daisyUI", true, false, false, false],
    ["Converts Tailwind CSS to daisyUI", true, false, false, false],
    ["Converts Bootstrap to daisyUI", true, false, false, false],
    ["Generates themes from an image", true, false, false, false],
    ["Provides component pictures to AI", true, false, false, false],
    [
      "Generates AI slop",
      "<span class='text-success'>Less likely</span>",
      "<span class='text-error'>Depends on the LLM</span>",
      "<span class='text-error'>More likely</span>",
      "<span class='text-error'>More likely</span>",
    ],
    [
      "Updates",
      "<span class='text-success'>Synced with daisyUI</span>",
      "<span class='text-success'>Synced with daisyUI</span>",
      "<span class='text-error'>Depends on a crawler</span>",
      "<span class='text-error'>Depends on a crawler</span>",
    ],
    [
      "Token usage efficiency",
      "<span class='text-success'>Super efficient</span>",
      "<span class='text-error'>Not efficient</span>",
      "<span class='text-error'>Wastes tokens on unrelated context</span>",
      "<span class='text-error'>Wastes tokens on unrelated context</span>",
    ],
  ]

  const faqItems = [
    {
      question: "Is this a one-time payment or a subscription?",
      answer:
        "Both are possible. You can purchase a monthly license, yearly license, or lifetime license.",
    },
    {
      question: "What happens after I pay?",
      answer:
        "You will receive an email with a license key that you can use to activate the MCP server. If you don't see the email, check your spam folder.",
    },
    {
      question: "Will I receive updates?",
      answer:
        "Yes. Blueprint is updated automatically with the latest version of daisyUI. New MCP tools, resources, and prompts are added automatically.",
    },
    {
      question: "Do I get customer support?",
      answer:
        "We offer support via Discord. Join the daisyUI Discord and ask your questions there.",
      href: "https://daisyui.com/discord",
      linkLabel: "Open Discord",
    },
    {
      question: "Can I cancel my subscription?",
      answer:
        "Yes. You can cancel at any time from the order portal. You will keep access until the end of your billing cycle.",
      href: "https://www.creem.io/my-orders/login",
      linkLabel: "Manage orders",
    },
    {
      question: "Can I get a refund?",
      answer:
        "Digital products are not refundable. If there was a payment mistake, such as a duplicate payment, email us and we will help resolve it.",
      href: "mailto:help@daisyui.com",
      linkLabel: "Email help@daisyui.com",
    },
    {
      question: "I didn't receive the email",
      answer: "Check your spam folder first. If you still can't find it, email help@daisyui.com.",
      href: "mailto:help@daisyui.com",
      linkLabel: "Email support",
    },
    {
      question: "I bought the wrong package",
      answer: "Email help@daisyui.com and we will help you get the right package.",
      href: "mailto:help@daisyui.com",
      linkLabel: "Email support",
    },
    {
      question: "There was an issue with the payment",
      answer:
        "If the payment failed and you did not receive the product, try again. If money was deducted, it is usually refunded automatically within one or two weeks. Email help@daisyui.com if the issue persists.",
      href: "mailto:help@daisyui.com",
      linkLabel: "Email support",
    },
  ]

  const dateFormat = {
    year: "numeric",
    month: "numeric",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  }

  let discountDialog = $state()
  let isClipboardButtonPressed = $state(false)
  let currentDate = $state(new Date().toISOString())
  let enhanced = $state(false)
  let pageReady = $state(false)
  let reducedMotion = $state(false)
  let blueprintCarouselIndex = $state(0)
  let blueprintCarouselTargetIndex = $state(0)
  let blueprintCarouselPromptIndex = $state(0)
  let blueprintCarouselDirection = $state(1)
  let blueprintTypedPrompt = $state(blueprintPreviews[0].prompt)
  let blueprintPromptTyping = $state(false)
  let showTrialBar = $state(false)
  let toolProgress = $state(expertRoles.map(() => 0))
  let toolCardMotion = $state(
    expertRoles.map((role) => role.cards.map(() => ({ opacity: 0, translateY: 16, scale: 0.9 }))),
  )
  let floatingOrientations = $state(expertRoles.map((_, index) => index % 2 === 1))
  let toolCardEnteredAt = expertRoles.map(() => null)
  let visibleSections = $state([])
  let toolNodes = []
  let toolFrame
  let trackedToolCount = 0
  let blueprintTypingInterval
  let blueprintCarouselQueue = []
  let blueprintCarouselCard
  let blueprintCarouselAnimation
  let blueprintCarouselAnimationDuration = 800
  let blueprintCarouselProcessing = false
  let blueprintCarouselBurstDuration = 800
  let blueprintCarouselDestroyed = false
  let blueprintCarouselAutoplayTimeout
  let blueprintCarouselHoverCount = 0
  let blueprintCarouselOnScreen = false
  let resetBlueprintPreviewImage = () => {}

  const copyText = (text) => {
    navigator.clipboard.writeText(text)
    isClipboardButtonPressed = true
    setTimeout(() => {
      isClipboardButtonPressed = false
    }, 2000)
  }

  const markVisible = (id) => {
    if (!visibleSections.includes(id)) {
      visibleSections = [...visibleSections, id]
    }
  }

  const revealOnScroll = (node, id) => {
    if (!("IntersectionObserver" in window)) {
      markVisible(id)
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          markVisible(id)
          observer.disconnect()
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" },
    )

    observer.observe(node)
    return {
      destroy() {
        observer.disconnect()
      },
    }
  }

  const typedToolCall = (role, index) => {
    const characters = Array.from(`Called ${role.terminalName}`)
    return characters.slice(0, Math.ceil(characters.length * toolProgress[index])).join("")
  }

  const floatingCardPosition = (roleIndex, cardIndex) => {
    const cardCount = expertRoles[roleIndex].cards.length
    const reversed = floatingOrientations[roleIndex]

    if (cardCount === 1) return reversed ? "middle-right" : "middle-left"
    if (roleIndex === 0 && cardCount === 2) {
      return ["top-right", "bottom-left"][cardIndex]
    }
    if (cardCount === 2) {
      return (reversed ? ["top-right", "bottom-left"] : ["top-left", "bottom-right"])[cardIndex]
    }

    return (
      reversed
        ? ["top-right", "middle-left", "bottom-right"]
        : ["top-left", "middle-right", "bottom-left"]
    )[cardIndex]
  }

  const updateToolScroll = (timestamp = performance.now()) => {
    toolFrame = undefined
    const viewportHeight = window.innerHeight
    let continueCardReveal = false
    const nextToolCardMotion = expertRoles.map((role) =>
      role.cards.map(() => ({
        opacity: 0,
        translateY: 16,
        scale: 0.9,
      })),
    )

    toolNodes.forEach((node, index) => {
      if (!node) return

      const rect = node.getBoundingClientRect()
      const start = viewportHeight - rect.height / 2
      const finish = viewportHeight / 2 - rect.height / 2
      const progress = reducedMotion
        ? Number(rect.top <= finish)
        : Math.min(1, Math.max(0, (start - rect.top) / (start - finish)))

      toolProgress[index] = progress

      const articleCenter = rect.top + rect.height / 2
      const scrollPosition = Math.min(
        1,
        Math.max(-1, (articleCenter - viewportHeight / 2) / Math.max(rect.height / 2, 1)),
      )
      const fadeDistance = 1 / 3
      const rawOpacity = Math.min(1, Math.max(0, (1 - Math.abs(scrollPosition)) / fadeDistance))
      const scrollOpacity = reducedMotion ? Number(rawOpacity >= 0.5) : rawOpacity

      if (scrollOpacity > 0 && toolCardEnteredAt[index] === null) {
        toolCardEnteredAt[index] = timestamp
      } else if (scrollOpacity === 0) {
        toolCardEnteredAt[index] = null
      }

      const elapsed = toolCardEnteredAt[index] === null ? 0 : timestamp - toolCardEnteredAt[index]

      nextToolCardMotion[index] = expertRoles[index].cards.map((_, cardIndex) => {
        const delay = cardIndex * 300
        const reveal = reducedMotion ? 1 : Math.min(1, Math.max(0, (elapsed - delay) / 100))

        if (!reducedMotion && scrollOpacity > 0 && elapsed < delay + 100) {
          continueCardReveal = true
        }

        const opacity = scrollOpacity * reveal
        const direction = scrollPosition < 0 ? -1 : 1

        return {
          opacity,
          translateY: reducedMotion ? 0 : direction * (1 - opacity) * 16,
          scale: reducedMotion ? 1 : 0.9 + opacity * 0.1,
        }
      })
    })

    toolCardMotion = nextToolCardMotion

    if (continueCardReveal) {
      toolFrame = requestAnimationFrame(updateToolScroll)
    }
  }

  const scheduleToolScroll = () => {
    if (toolFrame) return
    toolFrame = requestAnimationFrame(updateToolScroll)
  }

  const trackTool = (node, index) => {
    toolNodes[index] = node
    trackedToolCount += 1

    if (trackedToolCount === 1) {
      window.addEventListener("scroll", scheduleToolScroll, { passive: true })
      window.addEventListener("resize", scheduleToolScroll)
    }

    scheduleToolScroll()

    return {
      destroy() {
        toolNodes[index] = undefined
        trackedToolCount -= 1

        if (trackedToolCount === 0) {
          window.removeEventListener("scroll", scheduleToolScroll)
          window.removeEventListener("resize", scheduleToolScroll)
          if (toolFrame) cancelAnimationFrame(toolFrame)
        }
      },
    }
  }

  const trackHero = (node) => {
    if (!("IntersectionObserver" in window)) return

    const observer = new IntersectionObserver(([entry]) => {
      showTrialBar = !entry.isIntersecting && node.getBoundingClientRect().bottom < 0
    })

    observer.observe(node)
    return {
      destroy() {
        observer.disconnect()
      },
    }
  }

  const wrapBlueprintPreviewIndex = (index) =>
    (index + blueprintPreviews.length) % blueprintPreviews.length

  const panBlueprintPreviewImage = (node) => {
    const frame = node.parentElement
    const pixelsPerSecond = 200
    let animation
    let hovered = false
    let resizeObserver
    let updateFrame

    const currentOffset = () => {
      const transform = getComputedStyle(node).transform
      if (transform === "none") return 0

      try {
        return new DOMMatrixReadOnly(transform).m42
      } catch {
        const matrixValues = transform.match(/^matrix\((.+)\)$/)?.[1].split(",")
        return Number(matrixValues?.[5]) || 0
      }
    }

    const stopAtCurrentOffset = () => {
      const offset = currentOffset()
      animation?.cancel()
      animation = undefined
      node.style.transform = `translateY(${offset}px)`
      return offset
    }

    const resetToTop = () => {
      if (updateFrame) cancelAnimationFrame(updateFrame)
      updateFrame = undefined
      animation?.cancel()
      animation = undefined
      node.style.transform = "translateY(0px)"
    }

    const animateTo = (targetOffset) => {
      const startOffset = stopAtCurrentOffset()
      const distance = Math.abs(targetOffset - startOffset)
      const returningToTop = targetOffset === 0 && startOffset < -0.5
      const speed = returningToTop ? pixelsPerSecond * 4 : pixelsPerSecond

      if (distance < 0.5 || reducedMotion || !node.animate) {
        node.style.transform = `translateY(${reducedMotion ? 0 : targetOffset}px)`
        return
      }

      const nextAnimation = node.animate(
        [
          { transform: `translateY(${startOffset}px)` },
          { transform: `translateY(${targetOffset}px)` },
        ],
        {
          duration: (distance / speed) * 1000,
          easing: returningToTop ? "ease-out" : "linear",
          fill: "forwards",
        },
      )
      animation = nextAnimation

      nextAnimation.finished
        .then(() => {
          if (animation !== nextAnimation) return
          node.style.transform = `translateY(${targetOffset}px)`
          nextAnimation.cancel()
          animation = undefined
        })
        .catch(() => {})
    }

    const updatePosition = () => {
      updateFrame = undefined
      const overflow = Math.max(0, node.getBoundingClientRect().height - frame.clientHeight)
      animateTo(hovered && overflow > 0.5 ? -overflow : 0)
    }

    const schedulePositionUpdate = () => {
      if (updateFrame) cancelAnimationFrame(updateFrame)
      updateFrame = requestAnimationFrame(updatePosition)
    }

    const handlePointerEnter = () => {
      hovered = true
      schedulePositionUpdate()
    }

    const handlePointerLeave = () => {
      hovered = false
      schedulePositionUpdate()
    }

    const handleLoad = () => {
      resetToTop()
      schedulePositionUpdate()
    }

    resetBlueprintPreviewImage = resetToTop

    node.addEventListener("pointerenter", handlePointerEnter)
    node.addEventListener("pointerleave", handlePointerLeave)
    node.addEventListener("load", handleLoad)

    if ("ResizeObserver" in window) {
      resizeObserver = new ResizeObserver(schedulePositionUpdate)
      resizeObserver.observe(frame)
      resizeObserver.observe(node)
    }

    schedulePositionUpdate()

    return {
      destroy() {
        node.removeEventListener("pointerenter", handlePointerEnter)
        node.removeEventListener("pointerleave", handlePointerLeave)
        node.removeEventListener("load", handleLoad)
        resizeObserver?.disconnect()
        if (updateFrame) cancelAnimationFrame(updateFrame)
        animation?.cancel()
        node.style.removeProperty("transform")
        if (resetBlueprintPreviewImage === resetToTop) resetBlueprintPreviewImage = () => {}
      },
    }
  }

  const typeBlueprintPrompt = (prompt) => {
    if (blueprintTypingInterval) clearInterval(blueprintTypingInterval)

    if (reducedMotion) {
      blueprintTypedPrompt = prompt
      blueprintPromptTyping = false
      return
    }

    const characters = Array.from(prompt)
    let characterIndex = 0
    blueprintTypedPrompt = ""
    blueprintPromptTyping = true

    blueprintTypingInterval = setInterval(() => {
      characterIndex += 1
      blueprintTypedPrompt = characters.slice(0, characterIndex).join("")

      if (characterIndex >= characters.length) {
        clearInterval(blueprintTypingInterval)
        blueprintTypingInterval = undefined
        blueprintPromptTyping = false
      }
    }, 18)
  }

  const clearBlueprintCarouselAutoplay = () => {
    if (blueprintCarouselAutoplayTimeout) clearTimeout(blueprintCarouselAutoplayTimeout)
    blueprintCarouselAutoplayTimeout = undefined
  }

  const scheduleBlueprintCarouselAutoplay = () => {
    clearBlueprintCarouselAutoplay()
    if (blueprintCarouselDestroyed || blueprintCarouselHoverCount > 0 || !blueprintCarouselOnScreen)
      return

    blueprintCarouselAutoplayTimeout = setTimeout(() => {
      blueprintCarouselAutoplayTimeout = undefined
      if (!blueprintCarouselOnScreen || blueprintCarouselHoverCount > 0) return
      changeBlueprintPreview(1)
    }, 3000)
  }

  const pauseBlueprintCarouselAutoplay = () => {
    blueprintCarouselHoverCount += 1
    clearBlueprintCarouselAutoplay()
  }

  const resumeBlueprintCarouselAutoplay = () => {
    blueprintCarouselHoverCount = Math.max(0, blueprintCarouselHoverCount - 1)
    if (blueprintCarouselHoverCount === 0) scheduleBlueprintCarouselAutoplay()
  }

  const trackBlueprintCarouselVisibility = (node) => {
    if (!("IntersectionObserver" in window)) {
      blueprintCarouselOnScreen = true
      scheduleBlueprintCarouselAutoplay()
      return
    }

    const observer = new IntersectionObserver(([entry]) => {
      blueprintCarouselOnScreen = entry.isIntersecting

      if (blueprintCarouselOnScreen) {
        scheduleBlueprintCarouselAutoplay()
      } else {
        clearBlueprintCarouselAutoplay()
      }
    })

    observer.observe(node)

    return {
      destroy() {
        observer.disconnect()
        blueprintCarouselOnScreen = false
        clearBlueprintCarouselAutoplay()
      },
    }
  }

  const runBlueprintCarouselFlip = async (direction) => {
    resetBlueprintPreviewImage()
    const targetIndex = wrapBlueprintPreviewIndex(blueprintCarouselIndex + direction)
    blueprintCarouselDirection = direction
    blueprintCarouselTargetIndex = targetIndex
    blueprintCarouselPromptIndex = targetIndex
    typeBlueprintPrompt(blueprintPreviews[targetIndex].prompt)
    await tick()

    if (reducedMotion || !blueprintCarouselCard?.animate) {
      blueprintCarouselIndex = targetIndex
      return true
    }

    const angle = direction * -180
    blueprintCarouselAnimationDuration = blueprintCarouselBurstDuration
    const animation = blueprintCarouselCard.animate(
      [
        { transform: "translate3d(0, 0, 0) rotateY(0deg)" },
        { transform: `translate3d(0, 0, 0) rotateY(${angle}deg)` },
      ],
      {
        duration: blueprintCarouselAnimationDuration,
        easing:
          "linear(0, 0.057 4%, 0.19 8%, 0.36 12%, 0.53 16%, 0.68 20%, 0.8 24%, 0.89 28%, 0.95 32%, 0.987 38%, 1.008 44%, 1.018 52%, 1.015 58%, 1.008 64%, 1 70%, 0.995 76%, 0.994 80%, 0.995 85%, 0.997 90%, 0.999 96%, 1)",
        fill: "forwards",
      },
    )
    blueprintCarouselAnimation = animation

    try {
      await animation.finished
    } catch {
      if (blueprintCarouselDestroyed) return false
    }

    if (blueprintCarouselDestroyed) return false

    blueprintCarouselIndex = targetIndex
    await tick()
    animation.cancel()
    if (blueprintCarouselAnimation === animation) blueprintCarouselAnimation = undefined
    return true
  }

  const processBlueprintCarouselQueue = async () => {
    if (blueprintCarouselProcessing) return
    blueprintCarouselProcessing = true

    while (blueprintCarouselQueue.length && !blueprintCarouselDestroyed) {
      const direction = blueprintCarouselQueue.shift()
      const completed = await runBlueprintCarouselFlip(direction)
      if (!completed) break
    }

    blueprintCarouselProcessing = false
    blueprintCarouselBurstDuration = 800
    scheduleBlueprintCarouselAutoplay()
  }

  const changeBlueprintPreview = (direction) => {
    clearBlueprintCarouselAutoplay()
    blueprintCarouselQueue.push(direction)

    if (blueprintCarouselProcessing) {
      blueprintCarouselBurstDuration = Math.max(120, blueprintCarouselBurstDuration - 80)
      if (blueprintCarouselAnimation) {
        blueprintCarouselAnimation.playbackRate = Math.max(
          blueprintCarouselAnimation.playbackRate,
          blueprintCarouselAnimationDuration / blueprintCarouselBurstDuration,
        )
      }
    }

    processBlueprintCarouselQueue()
  }

  onMount(() => {
    enhanced = true
    blueprintCarouselDestroyed = false
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)")
    const updateMotionPreference = () => {
      reducedMotion = mediaQuery.matches
      scheduleToolScroll()

      if (reducedMotion) {
        if (blueprintTypingInterval) clearInterval(blueprintTypingInterval)
        blueprintTypingInterval = undefined
        blueprintTypedPrompt = blueprintPreviews[blueprintCarouselPromptIndex].prompt
        blueprintPromptTyping = false
        blueprintCarouselAnimation?.finish()
      }
    }
    const frame = requestAnimationFrame(() => {
      pageReady = true
    })

    const firstOrientation = Math.random() >= 0.5
    floatingOrientations = expertRoles.map((_, index) =>
      index % 2 === 0 ? firstOrientation : !firstOrientation,
    )

    updateMotionPreference()
    mediaQuery.addEventListener("change", updateMotionPreference)
    blueprintPreviews.forEach((preview) => {
      const previewImage = new Image()
      previewImage.src = `${blueprintPreviewBaseUrl}/sm/${preview.file}?`
    })
    scheduleBlueprintCarouselAutoplay()

    return () => {
      cancelAnimationFrame(frame)
      mediaQuery.removeEventListener("change", updateMotionPreference)
      if (blueprintTypingInterval) clearInterval(blueprintTypingInterval)
      blueprintCarouselDestroyed = true
      blueprintCarouselQueue = []
      clearBlueprintCarouselAutoplay()
      blueprintCarouselAnimation?.cancel()
    }
  })

  $effect(() => {
    const interval = setInterval(() => {
      currentDate = new Date().toISOString()
    }, 1000)

    return () => clearInterval(interval)
  })

  const isDiscountValid = (discount) => {
    const expiresAt = discount?.data?.attributes?.expires_at
    return Boolean(expiresAt && new Date(expiresAt).toISOString() > currentDate)
  }

  const fetchDiscount = (async () => {
    try {
      const [shorttimeDiscountResponse, specialDiscountResponse] = await Promise.all([
        fetch(PUBLIC_DAISYUI_API_PATH + "/api/discount_shorttime.json"),
        fetch(PUBLIC_DAISYUI_API_PATH + "/api/discount_special.json"),
      ])

      const shorttimeDiscount = await shorttimeDiscountResponse.json()
      const specialDiscount = await specialDiscountResponse.json()

      if (isDiscountValid(specialDiscount)) return specialDiscount
      if (isDiscountValid(shorttimeDiscount)) return shorttimeDiscount
    } catch {
      return null
    }

    return null
  })()
</script>

<SEO
  title="daisyUI Blueprint 1.5 | Official daisyUI MCP server"
  formatTitle={false}
  desc="Give your AI agent page architecture, creative direction, exact daisyUI component syntax, and a final quality inspection with daisyUI Blueprint 1.5."
  img="https://img.daisyui.com/images/blueprint.webp"
/>

{#snippet keyIcon()}
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="1.8"
    stroke-linecap="round"
    stroke-linejoin="round"
    class="size-5"
    aria-hidden="true"
  >
    <circle cx="7.5" cy="15.5" r="4.5"></circle>
    <path d="m10.7 12.3 8.8-8.8M15 8l2 2M17.5 5.5l2 2"></path>
  </svg>
{/snippet}

{#snippet bookIcon()}
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="1.8"
    stroke-linecap="round"
    stroke-linejoin="round"
    class="size-5"
    aria-hidden="true"
  >
    <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path>
    <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2Z"></path>
  </svg>
{/snippet}

{#snippet checkIcon(label = "Yes")}
  <svg
    aria-label={label}
    xmlns="http://www.w3.org/2000/svg"
    class="inline-block size-5 text-success"
    viewBox="0 0 24 24"
  >
    <path
      fill="none"
      stroke="currentColor"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="3"
      d="M5 12l5 5L20 7"
    ></path>
  </svg>
{/snippet}

{#snippet crossIcon()}
  <svg
    aria-label="No"
    xmlns="http://www.w3.org/2000/svg"
    class="inline-block size-5 text-error"
    viewBox="0 0 24 24"
  >
    <path
      fill="none"
      stroke="currentColor"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="3"
      d="M7 7l10 10M17 7 7 17"
    ></path>
  </svg>
{/snippet}

{#snippet arrowIcon()}
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="1.8"
    stroke-linecap="round"
    stroke-linejoin="round"
    class="size-5"
    aria-hidden="true"
  >
    <path d="M5 12h14M13 6l6 6-6 6"></path>
  </svg>
{/snippet}

{#snippet pricingCardContent(plan)}
  {#if plan.popular}
    <div class="absolute -top-3 start-6 z-2">
      <span class="badge bg-neutral px-3 font-semibold text-neutral-content shadow-sm">
        Most popular
      </span>
    </div>
  {/if}

  <div class="card-body gap-0 p-6 sm:p-7">
    <h3 id={`pricing-${plan.slug}`} class="card-title text-xl">
      {plan.name} license
    </h3>

    <div class="mt-8 flex items-end gap-2">
      <span class="font-title text-4xl leading-none font-semibold tracking-tight tabular-nums">
        {plan.price}
      </span>
      {#if plan.cadence}
        <span class="pb-1 text-sm text-base-content/50">{plan.cadence}</span>
      {/if}
    </div>

    <div class="mt-5 min-h-14 border-y border-base-300 py-3 text-sm">
      <p class="font-semibold text-base-content">{plan.summary}</p>
      <p class="mt-0.5 text-base-content/50">{plan.billing}</p>
    </div>

    <ul class="mt-6 flex grow flex-col gap-3 text-sm leading-relaxed">
      {#each plan.features as feature}
        <li class="flex items-start gap-2.5">
          <span class="mt-0.5 shrink-0">{@render checkIcon("Included")}</span>
          {#if feature.endsWith(" clients")}
            <span>
              {feature.slice(0, -" clients".length)}{" "}
              <span class="tooltip" data-tip={$t("simultaneous coding agent or apps")}>
                <button type="button" class="cursor-help border-b border-dashed border-current">
                  clients
                </button>
              </span>
            </span>
          {:else}
            <span>{feature}</span>
          {/if}
        </li>
      {/each}
    </ul>

    <div class="card-actions mt-8">
      <a
        class="btn group w-full bg-neutral text-neutral-content"
        href={plan.href}
        target="_blank"
        rel="noopener noreferrer"
      >
        {plan.cta}
        <span
          class="transition-transform duration-200 group-hover:translate-x-0.5 motion-reduce:transition-none rtl:rotate-180"
        >
          {@render arrowIcon()}
        </span>
      </a>
    </div>
  </div>
{/snippet}

{#snippet floatingToolCard(role, text, motion)}
  <div
    class="card card-sm card-border w-52 origin-center bg-base-100 text-base-content shadow-xl will-change-transform"
    style:opacity={motion.opacity}
    style:transform={`translateY(${motion.translateY}px) scale(${motion.scale})`}
  >
    <div class="card-body flex-row items-center gap-3 p-3">
      <img
        src={role.icon}
        alt=""
        class="size-10 shrink-0 object-contain"
        width="64"
        height="64"
        loading="lazy"
      />
      <span class="text-start text-xs leading-snug font-semibold">{$t(text)}</span>
    </div>
  </div>
{/snippet}

{#snippet blueprintWordmark()}
  <div class="inline-flex flex-col items-end" aria-label="daisyUI Blueprint version 1.5">
    <span class="me-3 mb-1 font-mono text-[0.625rem] text-blue-500">v1.5</span>
    <span
      class="inline-grid grid-cols-[.5rem_1fr_.5rem] grid-rows-[.5rem_1fr_.5rem] align-middle"
      dir="ltr"
    >
      <span class="border-s-2 border-t-2 border-blue-600 [grid-area:1/1/2/2]"></span>
      <span class="border-e-2 border-t-2 border-blue-600 [grid-area:1/3/2/4]"></span>
      <span class="border-s-2 border-b-2 border-blue-600 [grid-area:3/1/4/2]"></span>
      <span class="border-e-2 border-b-2 border-blue-600 [grid-area:3/3/4/4]"></span>
      <span
        class="font-title m-1 bg-blue-600 px-3 py-1 text-xl font-bold tracking-wide text-white [grid-area:1/1/4/4] sm:text-2xl"
        >BLUEPRINT</span
      >
    </span>
  </div>
{/snippet}

{#snippet comparisonCell(cell)}
  {#if typeof cell === "boolean"}
    {#if cell}
      {@render checkIcon()}
    {:else}
      {@render crossIcon()}
    {/if}
  {:else}
    {@html $t(cell)}
  {/if}
{/snippet}

{#await fetchDiscount then discount}
  {#if discount && isDiscountValid(discount) && isDiscountApplicableToBlueprint(discount)}
    <dialog bind:this={discountDialog} class="modal">
      <div class="modal-box">
        <div class="mb-6 grid h-24 place-items-center rounded-lg bg-base-200 p-6 text-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="mx-4 size-6"
            aria-hidden="true"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M21 11.25v8.25a1.5 1.5 0 0 1-1.5 1.5H5.25a1.5 1.5 0 0 1-1.5-1.5v-8.25M12 4.875A2.625 2.625 0 1 0 9.375 7.5H12m0-2.625V7.5m0-2.625A2.625 2.625 0 1 1 14.625 7.5H12m0 0V21m-8.625-9.75h18c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125h-18c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125Z"
            ></path>
          </svg>
        </div>
        <h2 class="font-title mb-4 text-center text-2xl font-bold">
          {$t("Limited time discount code")}
        </h2>
        <div
          class="flex w-full flex-col items-center justify-between gap-10"
          transition:fade={{ duration: 400 }}
        >
          <div class="flex flex-col gap-1">
            <div class="text-center text-sm [text-wrap:balance]">
              {$t("Use")}
              <span
                data-tip={isClipboardButtonPressed ? $t("copied") : $t("copy")}
                class="tooltip tooltip-error"
              >
                <button
                  class="badge badge-error cursor-copy px-2 font-mono tracking-wide"
                  onclick={() => copyText(discount.data.attributes.code)}
                >
                  {discount.data.attributes.code}
                </button>
              </span>
              {$t("code at checkout to get")}
              {discount.data.attributes.amount}% {$t("discount.")}
            </div>
          </div>

          <Countdown
            from={new Date(discount.data.attributes.expires_at).toLocaleString("en-GB", dateFormat)}
            dateFormat="DD/MM/YYYY, HH:mm:ss"
          >
            {#snippet children({ remaining })}
              {#if remaining.done === false}
                <div
                  class="tooltip shrink-0 after:hidden"
                  data-tip={$t("Remaining time")}
                  transition:fade={{ duration: 400 }}
                >
                  <date
                    datetime={new Date(discount.data.attributes.expires_at).toLocaleString(
                      "en-GB",
                      dateFormat,
                    )}
                    class={`grid ${remaining.days > 0 ? "grid-cols-4" : "grid-cols-3"} gap-2 text-center font-mono`}
                  >
                    {#if remaining.days > 0}
                      <div class="rounded-field border border-base-content/5 bg-base-200 p-2">
                        <span class="countdown block text-3xl font-normal">
                          <span style={`--value:${remaining.days};`}></span>
                        </span>
                        <span class="block text-xs tracking-wide uppercase opacity-40">
                          {$t("day")}
                        </span>
                      </div>
                    {/if}
                    <div class="rounded-field border border-base-content/5 bg-base-200 p-2">
                      <span class="countdown block text-3xl font-normal">
                        <span style={`--value:${remaining.hours};`}></span>
                      </span>
                      <span class="block text-xs tracking-wide uppercase opacity-40">
                        {$t("hour")}
                      </span>
                    </div>
                    <div class="rounded-field border border-base-content/5 bg-base-200 p-2">
                      <span class="countdown block text-3xl font-normal">
                        <span style={`--value:${remaining.minutes};`}></span>
                      </span>
                      <span class="block text-xs tracking-wide uppercase opacity-40">
                        {$t("min")}
                      </span>
                    </div>
                    <div class="rounded-field border border-base-content/5 bg-base-200 p-2">
                      <span class="countdown block text-3xl font-normal">
                        <span style={`--value:${remaining.seconds};`}></span>
                      </span>
                      <span class="block text-xs tracking-wide uppercase opacity-40">
                        {$t("sec")}
                      </span>
                    </div>
                  </date>
                </div>
              {/if}
            {/snippet}
          </Countdown>
        </div>
      </div>
      <form method="dialog" class="modal-backdrop">
        <button>{$t("close")}</button>
      </form>
    </dialog>
  {/if}
{/await}

{#if showTrialBar}
  <aside
    class="fixed bottom-3 left-1/2 z-20 w-[calc(100%-1.5rem)] max-w-3xl -translate-x-1/2"
    aria-label={$t("Blueprint free trial")}
    transition:fly={{ y: reducedMotion ? 0 : 16, duration: reducedMotion ? 0 : 300 }}
  >
    <div
      class="flex flex-wrap items-center justify-center gap-3 rounded-box border border-neutral-content/10 bg-neutral p-2 text-center text-sm font-semibold text-neutral-content shadow-2xl sm:justify-between sm:ps-5"
    >
      <div class="flex items-center gap-2">
        <img
          src="https://img.daisyui.com/images/emoji/0240_backhand-index-pointing-right_1f449.png"
          alt=""
          class="h-[30px] w-auto object-contain max-sm:hidden rtl:-scale-x-100"
          width="30"
          height="30"
          loading="lazy"
        />
        {#await fetchDiscount}
          <span
            >{$t("3-day free trial")}<span class="max-sm:hidden">{$t(", cancel anytime.")}</span
            ></span
          >
        {:then discount}
          {#if discount && isDiscountValid(discount) && isDiscountApplicableToBlueprint(discount)}
            <div class="flex items-center gap-2">
              <button class="link link-hover" onclick={() => discountDialog?.showModal()}>
                {discount.data.attributes.amount}% {$t("Discount code")}
              </button>
              <DiscountCountdown
                expiresAt={discount.data.attributes.expires_at}
                variant="compact"
                class="max-lg:hidden"
              />
            </div>
          {:else}
            <span
              >{$t("3-day free trial")}<span class="max-sm:hidden">{$t(", cancel anytime.")}</span
              ></span
            >
          {/if}
        {/await}
      </div>
      <a class="btn btn-sm" href={checkoutUrl} target="_blank" rel="noopener noreferrer">
        {@render keyIcon()}
        {$t("Get Your Blueprint License")}
      </a>
    </div>
  </aside>
{/if}

<div class="overflow-x-clip bg-base-100 text-base-content">
  <main>
    <section
      use:trackHero
      class="hero relative min-h-[calc(100svh-4rem)] overflow-hidden border-y border-base-300"
      style="
        background-image: linear-gradient(var(--color-base-300) 1px, transparent 1px), linear-gradient(90deg, var(--color-base-300) 1px, transparent 1px), linear-gradient(var(--color-base-300) 0.5px, transparent 0.5px), linear-gradient(90deg, var(--color-base-300) 0.5px, var(--color-base-100) 0.5px);
        background-size: 100px 100px, 100px 100px, 20px 20px, 20px 20px;
        background-position: -1px -1px, -1px -1px, -.5px -.5px, -.5px -.5px;"
    >
      <div
        class="hero-content relative z-1 mx-auto grid w-full max-w-7xl px-4 py-16 sm:px-8 lg:grid-cols-[1.08fr_.92fr] lg:items-center lg:py-24"
      >
        <div class="min-w-0">
          <div
            class="badge badge-soft badge-sm gap-2 transition-[opacity,transform] duration-500 motion-reduce:transition-none"
            class:translate-y-3={enhanced && !pageReady}
            class:opacity-0={enhanced && !pageReady}
          >
            <span class="status status-success" aria-hidden="true"></span>
            {$t("This page was made with Blueprint MCP")}
          </div>

          <h1
            class="font-title -ms-4 mt-6 max-w-3xl text-4xl font-semibold tracking-tight sm:text-5xl md:text-6xl"
          >
            <div class="ms-6">
              <img
                src="https://img.daisyui.com/images/daisyui/mark.svg"
                alt="daisyUI"
                class="relative -mt-6 inline-block size-[1.2em] shrink-0 -rotate-5 border border-dashed border-base-content/5 p-1 object-contain"
                width="96"
                height="96"
              />
              {$t("The Official")}
            </div>
            <div>
              <span
                class="text-rotate -rotate-1 text-[0.9em] leading-tight text-white duration-10000"
              >
                <span>
                  <span class="ms-10 bg-blue-600 px-2">{$t("UI Generator")}</span>
                  <span class="bg-blue-600 px-2">{$t("Creative Director")}</span>
                  <span class="ms-5 bg-blue-600 px-2">{$t("Page Architect")}</span>
                  <span class="bg-blue-600 px-2">{$t("Design System Expert")}</span>
                </span>
              </span>
            </div>
            <div class="relative ms-5">
              {$t("MCP Server")}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="-mt-6 inline-block size-[1.2em] shrink-0 rotate-5 border border-dashed border-base-content/5 p-2 align-middle"
                viewBox="0 0 195 195"
                fill="none"
                aria-label="Model Context Protocol"
              >
                <path
                  d="M25 97.8528L92.8822 29.9706C102.255 20.598 117.451 20.598 126.823 29.9706V29.9706C136.196 39.3431 136.196 54.5391 126.823 63.9117L75.5581 115.177"
                  stroke="currentColor"
                  stroke-width="12"
                  stroke-linecap="round"
                ></path>
                <path
                  d="M76.2652 114.47L126.823 63.9117C136.196 54.5391 151.392 54.5391 160.765 63.9117L161.118 64.2652C170.491 73.6378 170.491 88.8338 161.118 98.2063L99.7248 159.6C96.6006 162.724 96.6006 167.789 99.7248 170.913L112.331 183.52"
                  stroke="currentColor"
                  stroke-width="12"
                  stroke-linecap="round"
                ></path>
                <path
                  d="M109.853 46.9411L59.6482 97.1457C50.2756 106.518 50.2756 121.714 59.6482 131.087V131.087C69.0208 140.459 84.2167 140.459 93.5893 131.087L143.794 80.8822"
                  stroke="currentColor"
                  stroke-width="12"
                  stroke-linecap="round"
                ></path>
              </svg>
            </div>
          </h1>

          <div
            class="mt-8 max-w-2xl text-base leading-relaxed text-base-content/65 transition-[opacity,transform] duration-700 [transition-delay:380ms] motion-reduce:transition-none sm:text-lg"
            class:translate-y-4={enhanced && !pageReady}
            class:opacity-0={enhanced && !pageReady}
          >
            <div class="ms-2 py-1.5 max-sm:text-xs">
              <svg
                class="me-1 mb-1 inline-block size-4 align-middle text-success"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 665.8 1000"
                aria-hidden="true"
              >
                <path
                  fill="currentColor"
                  d="M248 850c-22.667 0 -41.333 -9.333 -56 -28c0 0 -180 -236 -180 -236c-10.667 -16 -14.667 -33.333 -12 -52c2.667 -18.667 11.333 -34 26 -46c14.667 -12 31.667 -16.667 51 -14c19.333 2.667 35 12 47 28c0 0 118 154 118 154c0 0 296 -474 296 -474c10.667 -16 25 -26 43 -30c18 -4 35.667 -1.333 53 8c16 10.667 26 25 30 43c4 18 1.333 35.667 -8 53c0 0 -350 560 -350 560c-13.333 21.333 -32 32 -56 32c0 0 -2 2 -2 2"
                ></path>
              </svg>
              {$t("The most powerful agentic UI workflow in an MCP server")}
            </div>
            <div class="ms-2 py-1.5 max-sm:text-xs">
              <svg
                class="me-1 mb-1 inline-block size-4 align-middle text-success"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 665.8 1000"
                aria-hidden="true"
              >
                <path
                  fill="currentColor"
                  d="M248 850c-22.667 0 -41.333 -9.333 -56 -28c0 0 -180 -236 -180 -236c-10.667 -16 -14.667 -33.333 -12 -52c2.667 -18.667 11.333 -34 26 -46c14.667 -12 31.667 -16.667 51 -14c19.333 2.667 35 12 47 28c0 0 118 154 118 154c0 0 296 -474 296 -474c10.667 -16 25 -26 43 -30c18 -4 35.667 -1.333 53 8c16 10.667 26 25 30 43c4 18 1.333 35.667 -8 53c0 0 -350 560 -350 560c-13.333 21.333 -32 32 -56 32c0 0 -2 2 -2 2"
                ></path>
              </svg>
              <span
                class="inline-block -rotate-1 bg-green-100 px-2 py-0.25 text-sm font-semibold text-black shadow-[2px_2px_var(--color-green-200)]"
              >
                <svg
                  class="text-success mx-1 inline-block size-4"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <g
                    stroke-linejoin="round"
                    stroke-linecap="round"
                    stroke-width="3"
                    fill="none"
                    stroke="currentColor"
                  >
                    <path d="M22 7L13.5 15.5 8.5 10.5 2 17"></path>
                    <path d="M16 7L22 7 22 13"></path>
                  </g>
                </svg>
                {$t("10× better code quality")}
              </span>
              +
              <span
                class="inline-block rotate-1 bg-green-100 px-2 py-0.25 text-sm font-semibold text-black shadow-[2px_2px_var(--color-green-200)]"
              >
                <svg
                  class="text-success mx-1 inline-block size-4"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <g
                    stroke-linejoin="round"
                    stroke-linecap="round"
                    stroke-width="3"
                    fill="none"
                    stroke="currentColor"
                  >
                    <path d="M22 7L13.5 15.5 8.5 10.5 2 17"></path>
                    <path d="M16 7L22 7 22 13"></path>
                  </g>
                </svg>
                {$t("10× faster results")}
              </span>
              {$t("and")}
              <span
                class="inline-block -rotate-1 bg-green-100 px-2 py-0.25 text-sm font-semibold text-black shadow-[2px_2px_var(--color-green-200)]"
              >
                {$t("90% lower token costs")}
              </span>
            </div>
            <div class="ms-2 py-1.5 max-sm:text-xs">
              <svg
                class="me-1 mb-1 inline-block size-4 align-middle text-success"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 665.8 1000"
                aria-hidden="true"
              >
                <path
                  fill="currentColor"
                  d="M248 850c-22.667 0 -41.333 -9.333 -56 -28c0 0 -180 -236 -180 -236c-10.667 -16 -14.667 -33.333 -12 -52c2.667 -18.667 11.333 -34 26 -46c14.667 -12 31.667 -16.667 51 -14c19.333 2.667 35 12 47 28c0 0 118 154 118 154c0 0 296 -474 296 -474c10.667 -16 25 -26 43 -30c18 -4 35.667 -1.333 53 8c16 10.667 26 25 30 43c4 18 1.333 35.667 -8 53c0 0 -350 560 -350 560c-13.333 21.333 -32 32 -56 32c0 0 -2 2 -2 2"
                ></path>
              </svg>
              {$t("Provides on-demand, fine-tuned UI design knowledge to your AI agent")}
            </div>
            <div class="ms-2 py-1.5 max-sm:text-xs">
              <svg
                class="me-1 mb-1 inline-block size-4 align-middle text-success"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 665.8 1000"
                aria-hidden="true"
              >
                <path
                  fill="currentColor"
                  d="M248 850c-22.667 0 -41.333 -9.333 -56 -28c0 0 -180 -236 -180 -236c-10.667 -16 -14.667 -33.333 -12 -52c2.667 -18.667 11.333 -34 26 -46c14.667 -12 31.667 -16.667 51 -14c19.333 2.667 35 12 47 28c0 0 118 154 118 154c0 0 296 -474 296 -474c10.667 -16 25 -26 43 -30c18 -4 35.667 -1.333 53 8c16 10.667 26 25 30 43c4 18 1.333 35.667 -8 53c0 0 -350 560 -350 560c-13.333 21.333 -32 32 -56 32c0 0 -2 2 -2 2"
                ></path>
              </svg>
              {$t("Convert")}
              <span class="badge badge-soft">Image</span>
              <span class="opacity-20">|</span>
              <span class="badge badge-soft">Figma</span>
              <span class="opacity-20">|</span>
              <span class="badge badge-soft">Tailwind CSS</span>
              <span class="opacity-20">|</span>
              <span class="badge badge-soft">Bootstrap</span>
              {$t("to daisyUI")}
            </div>
          </div>

          <div
            class="mt-9 flex flex-wrap items-center gap-3 transition-[opacity,transform] duration-700 [transition-delay:460ms] motion-reduce:transition-none"
            class:translate-y-4={enhanced && !pageReady}
            class:opacity-0={enhanced && !pageReady}
          >
            <div>
              <a
                class="btn btn-lg btn-neutral"
                href={checkoutUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                {@render keyIcon()}
                {$t("Get the license")}
              </a>
            </div>
            <a class="btn btn-lg" href="/blueprint/cursor/">
              {@render bookIcon()}
              {$t("Install guide")}
            </a>
          </div>

          <p
            class="mt-5 max-w-xl text-xs leading-relaxed text-base-content/45 transition-[opacity,transform] duration-700 [transition-delay:520ms] motion-reduce:transition-none"
            class:translate-y-4={enhanced && !pageReady}
            class:opacity-0={enhanced && !pageReady}
          >
            <span class="block">{$t("After purchase, your license key arrives by email.")}</span>
            <span class="block">
              {$t("Install the MCP server, add the key, and ask your agent to use Blueprint.")}
            </span>
          </p>
        </div>

        <div
          class="relative mt-8 min-w-0 transition-[opacity,transform] duration-700 [transition-delay:300ms] motion-reduce:transition-none lg:mt-0"
          class:translate-y-5={enhanced && !pageReady}
          class:opacity-0={enhanced && !pageReady}
        >
          <!-- DO NOT TRANSLATE ANYTHING INSIDE THIS DIV -->
          <div
            class="mockup-window content-none overflow-visible border border-neutral-content/10 bg-neutral text-neutral-content shadow-2xl"
            dir="ltr"
          >
            <div
              class="relative space-y-3 p-4 font-mono text-[0.6875rem] leading-[1.4] sm:p-6 sm:text-xs"
            >
              <div
                class="absolute end-6 -mt-[6.5rem] inline-grid grid-cols-[.5rem_1fr_.5rem] grid-rows-[.5rem_1fr_.5rem] align-middle"
              >
                <div class="border-s-2 border-t-2 border-blue-600 [grid-area:1/1/2/2]"></div>
                <div class="border-e-2 border-t-2 border-blue-600 [grid-area:1/3/2/4]"></div>
                <div class="border-s-2 border-b-2 border-blue-600 [grid-area:3/1/4/2]"></div>
                <div class="border-e-2 border-b-2 border-blue-600 [grid-area:3/3/4/4]"></div>
                <div
                  class="font-title m-1 bg-blue-600 px-1 text-3xl font-semibold text-white [grid-area:1/1/4/4] sm:text-5xl"
                >
                  BLUEPRINT
                </div>
              </div>
              <div class="flex gap-3 text-neutral-content">
                <span class="shrink-0 text-warning">❯</span>
                <span>Make a landing page for my food tracking app. Use Blueprint MCP</span>
              </div>
              <div class="flex gap-3 text-neutral-content/65">
                <span class="shrink-0">●</span>
                <span>
                  Blueprint plans the page context, directs the design, retrieves accurate component
                  syntax, generates the code, and verifies the result.
                </span>
              </div>

              <div class="space-y-2.5">
                {#each expertRoles as role}
                  <div class="grid grid-cols-[1rem_1fr] gap-2">
                    <span class="text-success">⏺</span>
                    <div class="min-w-0">
                      <div class="flex items-center gap-1.5 text-neutral-content">
                        <img
                          src={role.icon}
                          alt=""
                          class="size-4 shrink-0 object-contain"
                          width="64"
                          height="64"
                        />
                        <span>{role.terminalName}</span>
                      </div>
                      <div class="mt-0.5 flex gap-2 text-neutral-content/40">
                        <span>⎿</span>
                        <span>{role.output}</span>
                      </div>
                    </div>
                  </div>
                {/each}
              </div>

              <div
                class="flex gap-3 border-t border-neutral-content/10 pt-3 text-neutral-content/65"
              >
                <span class="shrink-0 text-success">●</span>
                <span>Finished in 5m 10s · All tests passed · 100/100</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section
      class="border-b border-base-300"
      aria-label={$t("Interface examples")}
      use:trackBlueprintCarouselVisibility
      data-blueprint-carousel
    >
      <div class="mx-auto flex max-w-7xl items-center px-4 py-24 sm:px-8">
        <div
          class="grid w-full items-center gap-8 lg:grid-cols-[minmax(0,1fr)_5rem_minmax(0,3fr)] lg:gap-6"
        >
          <div class="order-2 min-w-0 lg:order-1">
            <p
              class="mb-3 hidden font-mono text-xs tracking-[0.18em] text-base-content/60 uppercase lg:block"
            >
              {$t("MADE WITH BLUEPRINT MCP")}
            </p>
            <!-- DO NOT TRANSLATE ANYTHING INSIDE THIS DIV -->
            <div
              class="grid overflow-hidden bg-blue-600 text-white shadow-2xl lg:min-h-72"
              dir="ltr"
            >
              {#key blueprintCarouselPromptIndex}
                <div
                  class="flex flex-col p-5 [grid-area:1/1] sm:p-6 lg:min-h-72"
                  in:fly={{
                    x: reducedMotion ? 0 : blueprintCarouselDirection * 32,
                    duration: reducedMotion ? 0 : 260,
                  }}
                >
                  <div class="font-mono text-[0.625rem] tracking-wider text-white/60 uppercase">
                    One-shot prompt
                  </div>
                  <p class="mt-3 font-mono leading-relaxed max-sm:text-sm" aria-live="polite">
                    <span class="sr-only">
                      {blueprintPreviews[blueprintCarouselPromptIndex].prompt}
                    </span>
                    <span aria-hidden="true">{blueprintTypedPrompt}</span>
                    {#if blueprintPromptTyping}
                      <span
                        class="ms-0.5 inline-block h-[1em] w-[0.45em] animate-pulse bg-current align-[-0.1em]"
                        aria-hidden="true"
                      ></span>
                    {/if}
                  </p>
                  <div class="mt-auto flex items-center justify-between pt-6 text-xs">
                    <span class="font-mono text-white/60 uppercase">Model</span>
                    <span>{blueprintPreviews[blueprintCarouselPromptIndex].model}</span>
                  </div>
                </div>
              {/key}
            </div>

            <div class="mt-4 flex items-center gap-2">
              <button
                type="button"
                class="btn btn-square rounded-none border-blue-600 bg-blue-600 text-white"
                aria-label={$t("Prev")}
                onclick={() => changeBlueprintPreview(-1)}
                onpointerenter={pauseBlueprintCarouselAutoplay}
                onpointerleave={resumeBlueprintCarouselAutoplay}
                data-blueprint-prev
              >
                <svg
                  class="size-5 rtl:-scale-x-100"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  aria-hidden="true"
                >
                  <path d="m15 18-6-6 6-6"></path>
                </svg>
              </button>
              <button
                type="button"
                class="btn btn-square rounded-none border-blue-600 bg-blue-600 text-white"
                aria-label={$t("Next")}
                onclick={() => changeBlueprintPreview(1)}
                onpointerenter={pauseBlueprintCarouselAutoplay}
                onpointerleave={resumeBlueprintCarouselAutoplay}
                data-blueprint-next
              >
                <svg
                  class="size-5 rtl:-scale-x-100"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  aria-hidden="true"
                >
                  <path d="m9 18 6-6-6-6"></path>
                </svg>
              </button>
            </div>
          </div>

          <div
            class="hidden h-20 items-center justify-center lg:order-2 lg:flex"
            aria-hidden="true"
          >
            <svg
              class="w-20 rotate-90 overflow-visible lg:rotate-0 rtl:-scale-x-100"
              viewBox="0 0 80 32"
              fill="none"
            >
              <path
                d="M2 16h70M60 4l12 12-12 12"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
            </svg>
          </div>

          <div
            class="relative order-1 aspect-video w-full min-w-0 overflow-visible [perspective:200rem] lg:order-3"
            onpointerenter={pauseBlueprintCarouselAutoplay}
            onpointerleave={resumeBlueprintCarouselAutoplay}
          >
            <div
              bind:this={blueprintCarouselCard}
              class="relative size-full [transform:translate3d(0,0,0)] [transform-style:preserve-3d] [will-change:transform] after:absolute after:-bottom-8 after:left-1/2 after:block after:h-4 after:w-[70%] after:rounded-full after:bg-[#0006] after:content-[''] after:[translate:-50%_0] after:blur-[1rem]"
              data-blueprint-card
            >
              <div
                class="absolute inset-0 overflow-hidden rounded-lg border-2 border-black bg-base-200 [backface-visibility:hidden] [transform:translateZ(0.1px)] [will-change:transform]"
                data-blueprint-face="front"
              >
                <a
                  class="absolute inset-0"
                  href={blueprintPreviewPngUrl(blueprintPreviews[blueprintCarouselIndex].file)}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    use:panBlueprintPreviewImage
                    src={`${blueprintPreviewBaseUrl}/sm/${blueprintPreviews[blueprintCarouselIndex].file}?`}
                    alt={$t(blueprintPreviews[blueprintCarouselIndex].alt)}
                    class="absolute top-0 left-1/2 h-auto w-full max-w-none -translate-x-1/2"
                    loading="eager"
                  />
                </a>
              </div>
              <div
                class="absolute inset-0 overflow-hidden rounded-lg border-2 border-black bg-base-200 [backface-visibility:hidden] [transform:rotateY(180deg)_translateZ(0.1px)] [will-change:transform]"
                data-blueprint-face="back"
                aria-hidden="true"
              >
                <img
                  src={`${blueprintPreviewBaseUrl}/sm/${blueprintPreviews[blueprintCarouselTargetIndex].file}?`}
                  alt=""
                  class="absolute top-0 left-1/2 h-auto w-full max-w-none -translate-x-1/2"
                  loading="eager"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="border-b border-base-300 bg-base-200/45">
      <div class="mx-auto max-w-7xl px-4 py-12 sm:px-8 lg:py-16">
        <p class="text-center font-mono text-xs tracking-[0.18em] text-base-content/45 uppercase">
          {$t("Blueprint MCP server works with coding agents")}
        </p>
        <div class="flex justify-center">
          <div class="my-20 flex flex-wrap items-center justify-center gap-16">
            {#each codingTools as tool}
              <div
                class="group tooltip flex size-14 items-center justify-center rounded-field border border-base-300 bg-base-200 p-3 sm:size-16 lg:size-20"
                data-tip={tool.name}
              >
                <img
                  class="size-6 object-contain transition-transform duration-700 group-hover:scale-[1.3] motion-reduce:transition-none sm:size-7 lg:size-9"
                  style="transition-timing-function: linear(0, 0.009 1.1%, 0.035 2.2%, 0.141 4.8%, 0.281 7.4%, 0.723 15.5%, 0.943 20.6%, 1.068 25.6%, 1.087 28.7%, 1.084 32.2%, 1.038 39.4%, 0.984 47.8%, 0.994 59.3%, 1.003 71.2%, 1)"
                  src="https://img.daisyui.com/images/logos/{tool.icon}.svg"
                  alt={tool.name}
                  width="36"
                  height="36"
                  loading="lazy"
                />
              </div>
            {/each}
          </div>
        </div>
      </div>
    </section>

    <section
      id="problem"
      use:revealOnScroll={"problem"}
      class="scroll-mt-20 bg-neutral/90 text-neutral-content"
    >
      <div
        class="mx-auto max-w-7xl px-4 py-24 transition-[opacity,transform] duration-700 motion-reduce:transition-none sm:px-8 lg:py-36"
        class:translate-y-4={pageReady && !visibleSections.includes("problem")}
        class:opacity-0={pageReady && !visibleSections.includes("problem")}
      >
        <div class="grid gap-8 lg:grid-cols-[1.1fr_.9fr] lg:items-end">
          <div>
            <div class="font-mono text-xs text-error">{$t("ALL WEBSITES LOOK THE SAME")}</div>
            <h2
              class="font-title mt-5 max-w-4xl text-6xl leading-[0.84] font-semibold tracking-[-0.055em] sm:text-8xl lg:text-9xl"
            >
              {$t("Sick of")} <span class="whitespace-nowrap">{$t("AI slop?")}</span>
            </h2>
          </div>
          <p class="max-w-2xl text-lg leading-relaxed text-neutral-content/60 lg:pb-2">
            {$t(
              "AI-generated sites arrive with outdated dependencies, stale syntax, copy-paste layouts, the same color palettes, purple gradients, inconsistent spacing, and a structure so mediocre that no one wants to use it.",
            )}
          </p>
        </div>

        <div
          class="relative mt-16 transition-[opacity,transform] duration-700 [transition-delay:120ms] motion-reduce:transition-none lg:pr-[40%]"
          class:scale-[0.985]={pageReady && !visibleSections.includes("problem")}
          class:opacity-0={pageReady && !visibleSections.includes("problem")}
          dir="ltr"
        >
          <img
            src="https://img.daisyui.com/images/content/ai-slop.webp"
            alt={$t("Example of a generic AI-generated landing page")}
            class="w-full rounded-lg object-cover object-top outline outline-error"
            width="1200"
            height="1311"
            loading="lazy"
          />

          <div class="pointer-events-none absolute inset-0 hidden lg:block">
            <svg
              class="absolute inset-0 size-full text-error"
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
              aria-hidden="true"
            >
              <g fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round">
                <line x1="48" y1="11" x2="63" y2="11" vector-effect="non-scaling-stroke"></line>
                <line x1="39.6" y1="19.5" x2="63" y2="19.5" vector-effect="non-scaling-stroke"
                ></line>
                <line x1="48" y1="34.5" x2="63" y2="36" vector-effect="non-scaling-stroke"></line>
                <line x1="28.2" y1="29" x2="63" y2="28.5" vector-effect="non-scaling-stroke"></line>
                <line x1="51" y1="50" x2="63" y2="50" vector-effect="non-scaling-stroke"></line>
                <line x1="51" y1="58" x2="63" y2="59" vector-effect="non-scaling-stroke"></line>
                <line x1="51" y1="80" x2="63" y2="80" vector-effect="non-scaling-stroke"></line>
              </g>
            </svg>

            <span
              class="absolute top-[11%] left-[48%] size-3 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-error bg-base-100"
              aria-hidden="true"
            ></span>
            <span
              class="absolute top-[19.5%] left-[39.6%] size-3 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-error bg-base-100"
              aria-hidden="true"
            ></span>
            <span
              class="absolute top-[34.5%] left-[48%] size-3 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-error bg-base-100"
              aria-hidden="true"
            ></span>
            <span
              class="absolute top-[29%] left-[28.2%] size-3 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-error bg-base-100"
              aria-hidden="true"
            ></span>
            <span
              class="absolute top-[50%] left-[51%] size-3 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-error bg-base-100"
              aria-hidden="true"
            ></span>
            <span
              class="absolute top-[58%] left-[51%] size-3 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-error bg-base-100"
              aria-hidden="true"
            ></span>
            <span
              class="absolute top-[80%] left-[51%] size-3 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-error bg-base-100"
              aria-hidden="true"
            ></span>

            <div
              class="absolute top-[11%] left-[63%] -translate-y-1/2 whitespace-nowrap border border-error bg-error px-3 py-2 text-xs font-semibold text-error-content xl:text-sm"
            >
              {$t("The most mediocre layout")}
            </div>
            <div
              class="absolute top-[19.5%] left-[63%] -translate-y-1/2 whitespace-nowrap border border-error bg-error px-3 py-2 text-xs font-semibold text-error-content xl:text-sm"
            >
              {$t("Boring, inauthentic color palette")}
            </div>
            <div
              class="absolute top-[36%] left-[63%] -translate-y-1/2 whitespace-nowrap border border-error bg-error px-3 py-2 text-xs font-semibold text-error-content xl:text-sm"
            >
              {$t("Looks like every other AI-generated site")}
            </div>
            <div
              class="absolute top-[28.5%] left-[63%] -translate-y-1/2 whitespace-nowrap border border-error bg-error px-3 py-2 text-xs font-semibold text-error-content xl:text-sm"
            >
              {$t("Inconsistent components, no design system")}
            </div>
            <div
              class="absolute top-[50%] left-[63%] -translate-y-1/2 whitespace-nowrap border border-error bg-error px-3 py-2 text-xs font-semibold text-error-content xl:text-sm"
            >
              {$t("Inaccessible, inefficient, and unmaintainable code")}
            </div>
            <div
              class="absolute top-[59%] left-[63%] -translate-y-1/2 whitespace-nowrap border border-error bg-error px-3 py-2 text-xs font-semibold text-error-content xl:text-sm"
            >
              {$t("AI slop content and lack of structure")}
            </div>
            <div
              class="absolute top-[80%] left-[63%] -translate-y-1/2 whitespace-nowrap border border-error bg-error px-3 py-2 text-xs font-semibold text-error-content xl:text-sm"
            >
              {$t("Purple gradients everywhere")}
            </div>
          </div>

          <div class="mt-5 grid gap-2 lg:hidden">
            {#each ["The most mediocre layout", "Boring, inauthentic color palette", "Looks like every other AI-generated site", "Inconsistent components, no design system", "Inaccessible, inefficient, and unmaintainable code", "AI slop content and lack of structure", "Purple gradients everywhere"] as issue}
              <div class="border border-error px-3 py-2 text-sm text-error">
                <span class="me-2" aria-hidden="true">×</span>{$t(issue)}
              </div>
            {/each}
          </div>
        </div>
      </div>
    </section>

    <section use:revealOnScroll={"skills"} class="bg-neutral text-neutral-content">
      <div
        class="mx-auto grid max-w-7xl gap-14 px-4 py-24 transition-[opacity,transform] duration-700 motion-reduce:transition-none sm:px-8 lg:grid-cols-[.82fr_1.18fr] lg:py-36"
        class:translate-y-4={pageReady && !visibleSections.includes("skills")}
        class:opacity-0={pageReady && !visibleSections.includes("skills")}
      >
        <div>
          <div class="font-mono text-xs text-error">
            {$t("TRYING TO FIX THE SLOP WITH INSTRUCTIONS?")}
          </div>
          <h2
            class="font-title mt-5 text-5xl leading-[0.88] font-semibold tracking-[-0.05em] sm:text-7xl lg:text-8xl"
          >
            {$t("Your LLM ignores the instructions and skills.")}
          </h2>
          <p class="mt-8 max-w-xl text-base leading-relaxed text-neutral-content/60 sm:text-lg">
            {$t(
              "Agent skills are collections of instructions and rules. Check the logs and the pattern is familiar: the model reads a few files, skips the rest, ignores inconvenient rules, and moves on.",
            )}
          </p>
          <p class="mt-4 max-w-xl text-base leading-relaxed text-neutral-content/60 sm:text-lg">
            {$t(
              "UI work needs more context than most tasks. Yet as the instruction set grows, the chance of selective reading grows with it.",
            )}
          </p>
        </div>

        <div class="min-w-0">
          <div class="stats stats-vertical w-full border border-neutral-content/10 bg-neutral">
            <div class="stat">
              <div class="stat-title text-neutral-content/45">{$t("Skill files inspected")}</div>
              <div class="stat-value font-title mb-2 text-2xl text-neutral-content sm:text-3xl">
                {$t("Ignored 40% of the rules")}
              </div>
              <div class="stat-desc whitespace-normal text-error">
                <span class="block">{$t("Skipped 23 files due to overconfidence")}</span>
                <span class="mt-1 block">
                  {$t("Ignored the rules and treated them as suggestions only")}
                </span>
              </div>
            </div>
          </div>

          <!-- DO NOT TRANSLATE ANYTHING INSIDE THIS DIV -->
          <ul class="list mt-5 border-y border-neutral-content/10 font-mono text-xs">
            <li class="list-row items-center rounded-none border-b border-neutral-content/10">
              <span class="status status-success status-lg" aria-hidden="true"></span>
              <span class="grow text-neutral-content">SKILL.md</span>
              <span class="text-success">read</span>
            </li>
            <li class="list-row items-center rounded-none border-b border-neutral-content/10">
              <span class="status status-success status-lg" aria-hidden="true"></span>
              <span class="grow text-neutral-content">references/components.md</span>
              <span class="text-success">Lines 1 to 120</span>
            </li>
            <li class="list-row items-center rounded-none border-b border-neutral-content/10">
              <span class="status status-success status-lg" aria-hidden="true"></span>
              <span class="grow text-neutral-content">references/themes.md</span>
              <span class="text-success">Lines 1 to 120</span>
            </li>
            <li
              class="list-row items-center rounded-none border-b border-neutral-content/10 opacity-55"
            >
              <span class="status status-error status-lg" aria-hidden="true"></span>
              <span class="grow">references/design.md</span>
              <span>partially ignored</span>
            </li>
            <li
              class="list-row items-center rounded-none border-b border-neutral-content/10 opacity-55"
            >
              <span class="status status-error status-lg" aria-hidden="true"></span>
              <span class="grow">references/anti-patterns.md</span>
              <span>partially ignored</span>
            </li>
            <li
              class="list-row items-center rounded-none border-b border-neutral-content/10 opacity-55"
            >
              <span class="status status-error status-lg" aria-hidden="true"></span>
              <span class="grow">references/accessibility.md</span>
              <span>partially ignored</span>
            </li>
            <li
              class="list-row items-center rounded-none border-b border-neutral-content/10 opacity-55"
            >
              <span class="status status-error status-lg" aria-hidden="true"></span>
              <span class="grow">references/responsive.md</span>
              <span>partially ignored</span>
            </li>
            <li class="list-row items-center rounded-none opacity-55">
              <span class="status status-error status-lg" aria-hidden="true"></span>
              <span class="grow">references/quality-checks.md</span>
              <span>skipped</span>
            </li>
          </ul>

          <div role="alert" class="alert alert-error alert-soft mt-5">
            <span aria-hidden="true">!</span>
            <span
              >{$t(
                "The model continued without following the rules it was expected to follow.",
              )}</span
            >
          </div>
        </div>
      </div>
    </section>

    <section class="border-b border-neutral-content/10 bg-neutral/90 text-neutral-content">
      <div class="mx-auto max-w-7xl px-4 py-24 sm:px-8 lg:py-36">
        <div class="mx-auto max-w-[40rem]">
          <div class="font-mono text-xs text-error uppercase">
            {$t("Wasted time, wasted effort, wasted tokens")}
          </div>
          <h2
            class="font-title mt-5 text-5xl leading-[0.9] font-semibold tracking-[-0.05em] text-balance sm:text-7xl"
          >
            {$t("Tired of wasting tokens?")}
            <img
              src="https://img.daisyui.com/images/emoji/0080_disappointed-face_1f61e.png"
              alt="Use less AI tokens"
              class="-mt-4 inline-block size-16 rotate-[5deg]"
              loading="lazy"
            />
          </h2>
          <div class="mt-10 space-y-5 text-base leading-relaxed text-neutral-content/65 sm:text-lg">
            <p>
              {$t(
                "Without clear instructions, AI creates the same generic UI for everyone. That's why trends like purple buttons and gradients quickly became overused.",
              )}
            </p>
            <p>
              {$t(
                "Making the design unique takes many prompts, additional edits, wasted time, and LOTS of tokens.",
              )}
            </p>
          </div>
          <p class="font-title mt-10 text-2xl leading-snug font-semibold text-balance sm:text-3xl">
            <span class="block">{$t("What if...")}</span>
            <span class="block">
              {$t("you could one-shot a unique, original, and functional UI without any effort?")}
            </span>
          </p>
        </div>
      </div>
    </section>

    <section class="overflow-hidden border-b border-base-300 py-20 sm:py-28">
      <div class="mx-auto max-w-7xl px-2 text-center sm:px-6">
        <p class="font-title mb-8 text-3xl font-semibold tracking-tight sm:text-5xl">
          {$t("No slop. No skip. No waste.")}
        </p>
        <div class="mb-4 inline-grid grid-cols-[1rem_1fr_1rem] grid-rows-[1rem_1fr_1rem]">
          <div class="border-s-2 border-t-2 border-blue-600 [grid-area:1/1/2/2]"></div>
          <div class="border-e-2 border-t-2 border-blue-600 [grid-area:1/3/2/4]"></div>
          <div class="border-s-2 border-b-2 border-blue-600 [grid-area:3/1/4/2]"></div>
          <div class="border-e-2 border-b-2 border-blue-600 [grid-area:3/3/4/4]"></div>
          <div class="[grid-area:1/1/4/4]">
            <div>
              <h2
                class="group font-title m-2 text-[clamp(2.5rem,12vw,8rem)] leading-none font-semibold text-white"
                style="
                  background-image: linear-gradient(#3B72FE 1px, transparent 1px), linear-gradient(90deg, #3B72FE 1px, transparent 1px), linear-gradient(#3B72FE 0.5px, transparent 0.5px), linear-gradient(90deg, #3B72FE 0.5px, #155dfc 0.5px);
                  background-size: 50px 50px, 50px 50px, 10px 10px, 10px 10px;
                  background-position: -2px -2px, -2px -2px, -1px -1px, -1px -1px;"
              >
                <div
                  class="flex size-full bg-transparent px-4 transition-colors duration-2000 group-hover:bg-blue-600"
                >
                  BLUEPRINT
                </div>
              </h2>
            </div>
          </div>
        </div>
        <p class="font-title mt-8 text-2xl font-semibold tracking-tight sm:text-4xl">
          {$t("Meet the Blueprint MCP tools")}
        </p>
        <div class="mt-6 flex flex-wrap justify-center gap-5">
          {#each expertRoles as role}
            <div class="group tooltip" data-tip={$t(role.name)}>
              <img
                src={role.icon}
                alt={$t(role.name)}
                class="size-10 object-contain transition-transform duration-700 group-hover:scale-[1.3] motion-reduce:transition-none sm:size-20"
                style="transition-timing-function: linear(0, 0.009 1.1%, 0.035 2.2%, 0.141 4.8%, 0.281 7.4%, 0.723 15.5%, 0.943 20.6%, 1.068 25.6%, 1.087 28.7%, 1.084 32.2%, 1.038 39.4%, 0.984 47.8%, 0.994 59.3%, 1.003 71.2%, 1)"
                width="80"
                height="80"
                loading="lazy"
              />
            </div>
          {/each}
        </div>
      </div>
    </section>

    <section id="workflow" class="scroll-mt-16 border-b border-base-300 bg-base-200/45">
      <div class="mx-auto max-w-7xl px-4 pt-24 sm:px-8 lg:pt-36">
        <div class="grid gap-10 lg:grid-cols-[.72fr_1.28fr] lg:items-end">
          <div>
            <div class="font-mono text-xs text-success">{$t("THE REAL SOLUTION")}</div>
            <h2
              class="font-title mt-5 text-5xl leading-[0.88] font-semibold tracking-[-0.05em] sm:text-7xl lg:text-8xl"
            >
              {$t("Blueprint fixes that.")}
            </h2>
          </div>
          <div class="lg:pb-2">
            <p class="text-2xl leading-tight font-semibold sm:text-3xl">
              {$t("Introducing a mandatory MCP workflow.")}
            </p>
            <p class="mt-5 max-w-2xl leading-relaxed text-base-content/60">
              {$t(
                "Every tool has a defined job and a strict execution order. Each tool provides the necessary resources and functionality to your agent. The agent must follow these rules sequentially. It cannot skip steps, invent component syntax, or mark unfinished work as complete.",
              )}
            </p>
          </div>
        </div>

        <div class="mt-14 max-w-full overflow-x-auto">
          <div
            class="stats stats-vertical w-full min-w-0 bg-base-300 shadow-sm sm:stats-horizontal"
          >
            <div class="stat">
              <div class="stat-title">{$t("Rules and principles")}</div>
              <div class="stat-value font-title tabular-nums">168</div>
              <div class="stat-desc">{$t("LLM is forced to read and follow")}</div>
            </div>
            <div class="stat">
              <div class="stat-title">{$t("Page architectures")}</div>
              <div class="stat-value font-title tabular-nums">211</div>
              <div class="stat-desc">{$t("Matched by intent")}</div>
            </div>
            <div class="stat">
              <div class="stat-title">{$t("daisyUI components")}</div>
              <div class="stat-value font-title tabular-nums">68</div>
              <div class="stat-desc">{$t("Syntax, examples, code snippets")}</div>
            </div>
            <div class="stat">
              <div class="stat-title">{$t("Final inspection")}</div>
              <div class="stat-value font-title tabular-nums">100/100</div>
              <div class="stat-desc">{$t("Finds and fixes visual issues")}</div>
            </div>
          </div>
        </div>

        <div class="mt-16 grid gap-12 pb-24 lg:grid-cols-[.92fr_1.08fr] lg:gap-16 lg:pb-36">
          <div class="lg:pb-[70svh]">
            {#each expertRoles as role, index}
              <article
                use:trackTool={index}
                class="flex min-h-[54svh] flex-col justify-center border-t border-base-300 py-16 last:border-b"
              >
                <div class="flex flex-wrap items-center gap-3">
                  <span class="font-mono text-xs text-base-content/35">{role.number}</span>
                  <span class="badge badge-soft badge-sm">{$t(role.requirement)}</span>
                </div>
                <h3 class="font-title mt-6 text-4xl leading-none font-bold sm:text-5xl">
                  <img
                    src={role.icon}
                    alt=""
                    class="me-1 inline-block size-[1em] object-contain align-bottom"
                    width="64"
                    height="64"
                    loading="lazy"
                  />
                  {$t(role.name)}
                </h3>
                <p class="mt-6 max-w-xl text-lg leading-relaxed text-base-content/65">
                  {$t(role.description)}
                </p>
                <p class="mt-5 max-w-xl text-sm leading-relaxed text-base-content/45">
                  {$t(role.detail)}
                </p>
              </article>
            {/each}
          </div>

          <div class="min-w-0 lg:order-none">
            <div class="sticky top-24 py-16">
              {#each expertRoles as role, roleIndex}
                {#each role.cards as card, cardIndex}
                  {@const position = floatingCardPosition(roleIndex, cardIndex)}
                  {#if position === "top-left"}
                    <div
                      class="pointer-events-none absolute start-0 top-[30%] z-2 hidden -translate-x-1/2 -rotate-2 rtl:translate-x-1/2 rtl:rotate-2 lg:block"
                      aria-hidden="true"
                    >
                      {@render floatingToolCard(role, card, toolCardMotion[roleIndex][cardIndex])}
                    </div>
                  {:else if position === "top-right"}
                    <div
                      class="pointer-events-none absolute end-0 top-[30%] z-2 hidden translate-x-1/2 rotate-2 rtl:-translate-x-1/2 rtl:-rotate-2 lg:block"
                      aria-hidden="true"
                    >
                      {@render floatingToolCard(role, card, toolCardMotion[roleIndex][cardIndex])}
                    </div>
                  {:else if position === "middle-left"}
                    <div
                      class="pointer-events-none absolute start-0 top-1/2 z-2 hidden -translate-x-1/2 -translate-y-1/2 -rotate-2 rtl:translate-x-1/2 rtl:rotate-2 lg:block"
                      aria-hidden="true"
                    >
                      {@render floatingToolCard(role, card, toolCardMotion[roleIndex][cardIndex])}
                    </div>
                  {:else if position === "middle-right"}
                    <div
                      class="pointer-events-none absolute end-0 top-1/2 z-2 hidden translate-x-1/2 -translate-y-1/2 rotate-2 rtl:-translate-x-1/2 rtl:-rotate-2 lg:block"
                      aria-hidden="true"
                    >
                      {@render floatingToolCard(role, card, toolCardMotion[roleIndex][cardIndex])}
                    </div>
                  {:else if position === "bottom-left"}
                    <div
                      class="pointer-events-none absolute start-0 bottom-[30%] z-2 hidden -translate-x-1/2 -rotate-2 rtl:translate-x-1/2 rtl:rotate-2 lg:block"
                      aria-hidden="true"
                    >
                      {@render floatingToolCard(role, card, toolCardMotion[roleIndex][cardIndex])}
                    </div>
                  {:else}
                    <div
                      class="pointer-events-none absolute end-0 bottom-[30%] z-2 hidden translate-x-1/2 rotate-2 rtl:-translate-x-1/2 rtl:-rotate-2 lg:block"
                      aria-hidden="true"
                    >
                      {@render floatingToolCard(role, card, toolCardMotion[roleIndex][cardIndex])}
                    </div>
                  {/if}
                {/each}
              {/each}

              <!-- DO NOT TRANSLATE ANYTHING INSIDE THIS DIV -->
              <div
                class="mockup-window max-h-[calc(100svh-7rem)] overflow-y-auto border border-neutral-content/10 bg-neutral text-neutral-content shadow-2xl"
                dir="ltr"
                aria-hidden="true"
              >
                <div
                  class="min-h-[29rem] space-y-3 p-4 pt-10 font-mono text-[0.6875rem] leading-[1.45] sm:p-6 sm:pt-10 sm:text-xs"
                >
                  <div class="flex gap-3">
                    <span class="shrink-0 text-warning">❯</span>
                    <span>Generate a landing page for my iOS food tracking app</span>
                  </div>
                  <div class="flex gap-3 text-neutral-content/65">
                    <span class="shrink-0 text-success">●</span>
                    <span>Using the daisyUI Blueprint MCP server</span>
                  </div>

                  {#if toolProgress.every((progress) => progress === 0)}
                    <div class="flex gap-3 pt-3 text-neutral-content/35">
                      <span>↓</span>
                      <span>Scroll to run the mandatory workflow</span>
                    </div>
                  {/if}

                  <div class="space-y-3 pt-1">
                    {#each expertRoles as role, index}
                      {#if toolProgress[index] > 0}
                        <div class="grid grid-cols-[1rem_1fr] gap-2">
                          <span class="text-success">⏺</span>
                          <div class="min-w-0">
                            <div class="break-words text-neutral-content">
                              <img
                                src={role.icon}
                                alt=""
                                class="me-1 inline-block size-4 object-contain align-middle"
                                width="64"
                                height="64"
                                loading="lazy"
                              />
                              {typedToolCall(role, index)}
                              {#if toolProgress[index] < 1}
                                <span class="text-warning">▋</span>
                              {/if}
                            </div>
                            {#if toolProgress[index] >= 1}
                              <div class="mt-1 flex gap-2 text-neutral-content/40">
                                <span>⎿</span>
                                <span>{role.output}</span>
                              </div>
                            {/if}
                          </div>
                        </div>
                      {/if}
                    {/each}
                  </div>

                  {#if toolProgress[expertRoles.length - 1] >= 1}
                    <div
                      class="flex gap-3 border-t border-neutral-content/10 pt-4 text-neutral-content/65"
                      transition:fly={{
                        y: reducedMotion ? 0 : 10,
                        duration: reducedMotion ? 0 : 340,
                      }}
                    >
                      <span class="shrink-0 text-success">●</span>
                      <span>Finished in 5m 10s · Using the daisyUI Blueprint MCP server</span>
                    </div>
                  {/if}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section
      id="convert"
      use:revealOnScroll={"convert"}
      class="scroll-mt-16 border-b border-base-300"
    >
      <div
        class="mx-auto max-w-7xl px-4 py-24 transition-[opacity,transform] duration-700 motion-reduce:transition-none sm:px-8 lg:py-36"
        class:translate-y-4={pageReady && !visibleSections.includes("convert")}
        class:opacity-0={pageReady && !visibleSections.includes("convert")}
      >
        <div class="grid gap-10 lg:grid-cols-[.8fr_1.2fr] lg:items-end">
          <div>
            <h2
              class="font-title mt-5 text-5xl leading-[0.88] font-semibold tracking-[-0.05em] sm:text-7xl lg:text-8xl"
            >
              {$t("Convert everything to daisyUI.")}
            </h2>
          </div>
          <p
            class="max-w-2xl text-lg leading-relaxed text-base-content/60 lg:justify-self-end lg:pb-2"
          >
            {$t(
              "Blueprint gives your agent the tools to understand the source first. It extracts the structure, chooses the matching daisyUI components, supplies exact snippets, and checks the conversion when the code is done.",
            )}
          </p>
        </div>

        <div class="mt-16 grid auto-rows-[minmax(17rem,auto)] gap-4 lg:grid-cols-12">
          <article
            class="card card-border overflow-hidden bg-neutral text-start text-neutral-content lg:col-span-7 lg:row-span-2"
          >
            <div class="card-body justify-between p-7 sm:p-10">
              <div>
                <div class="flex items-center gap-4" aria-label={$t("Figma converts to daisyUI")}>
                  <span
                    class="flex size-14 items-center justify-center rounded-box bg-neutral-content/10 p-3"
                  >
                    <svg
                      class="size-full"
                      width="56"
                      height="56"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      role="img"
                      aria-label="Figma"
                    >
                      <g
                        stroke-linejoin="round"
                        stroke-linecap="round"
                        stroke-width="1.75"
                        fill="none"
                        stroke="currentColor"
                      >
                        <circle cx="15" cy="12" r="3"></circle>
                        <path
                          d="M9 21C10.6569 21 12 19.6569 12 18V15H9C7.34315 15 6 16.3431 6 18C6 19.6569 7.34315 21 9 21Z"
                        ></path>
                        <path d="M12 9V15H9C7.34315 15 6 13.6569 6 12C6 10.3431 7.34315 9 9 9H12Z"
                        ></path>
                        <path d="M12 3V9H9C7.34315 9 6 7.65685 6 6C6 4.34315 7.34315 3 9 3H12Z"
                        ></path>
                        <path d="M12 3V9H15C16.6569 9 18 7.65685 18 6C18 4.34315 16.6569 3 15 3H12Z"
                        ></path>
                      </g>
                    </svg>
                  </span>
                  <span class="text-neutral-content/40">{@render arrowIcon()}</span>
                  <span
                    class="flex size-14 items-center justify-center rounded-box bg-neutral-content/10 p-3"
                  >
                    <img
                      src="https://img.daisyui.com/images/daisyui/mark.svg"
                      alt="daisyUI"
                      class="size-full object-contain"
                      width="56"
                      height="56"
                      loading="lazy"
                    />
                  </span>
                </div>
                <h3 class="font-title mt-9 text-4xl leading-none font-bold sm:text-5xl">
                  {$t(conversionTools[0].title)}
                </h3>
                <p class="mt-5 max-w-xl leading-relaxed text-neutral-content/60">
                  {$t(conversionTools[0].description)}
                </p>
              </div>

              <div class="mt-14 border-t border-neutral-content/10 pt-6 font-mono text-xs">
                <div class="text-neutral-content/40">{conversionTools[0].input}</div>
                <div class="mt-3 flex items-center gap-3 text-success">
                  {@render arrowIcon()}
                  <span>{conversionTools[0].output}</span>
                </div>
                <div class="mt-7 break-all text-[0.6875rem] text-neutral-content/30">
                  {conversionTools[0].toolName}
                </div>
              </div>
            </div>
          </article>

          <article class="card card-border bg-base-200 text-start lg:col-span-5">
            <div class="card-body p-7 sm:p-8">
              <div
                class="flex items-center gap-4"
                aria-label={$t("Tailwind CSS converts to daisyUI")}
              >
                <span
                  class="flex size-14 items-center justify-center rounded-box border border-base-300 bg-base-100 p-3"
                >
                  <svg
                    class="size-full"
                    width="56"
                    height="56"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 54 33"
                    role="img"
                    aria-label="Tailwind CSS"
                  >
                    <g clip-path="url(#blueprint-tailwind-clip)">
                      <path
                        fill="currentColor"
                        fill-rule="evenodd"
                        d="M27 0c-7.2 0-11.7 3.6-13.5 10.8 2.7-3.6 5.85-4.95 9.45-4.05 2.054.513 3.522 2.004 5.147 3.653C30.744 13.09 33.808 16.2 40.5 16.2c7.2 0 11.7-3.6 13.5-10.8-2.7 3.6-5.85 4.95-9.45 4.05-2.054-.513-3.522-2.004-5.147-3.653C36.756 3.11 33.692 0 27 0zM13.5 16.2C6.3 16.2 1.8 19.8 0 27c2.7-3.6 5.85-4.95 9.45-4.05 2.054.514 3.522 2.004 5.147 3.653C17.244 29.29 20.308 32.4 27 32.4c7.2 0 11.7-3.6 13.5-10.8-2.7 3.6-5.85 4.95-9.45 4.05-2.054-.513-3.522-2.004-5.147-3.653C23.256 19.31 20.192 16.2 13.5 16.2z"
                        clip-rule="evenodd"
                      ></path>
                    </g>
                    <defs>
                      <clipPath id="blueprint-tailwind-clip">
                        <path fill="#fff" d="M0 0h54v32.4H0z"></path>
                      </clipPath>
                    </defs>
                  </svg>
                </span>
                <span class="text-base-content/35">{@render arrowIcon()}</span>
                <span
                  class="flex size-14 items-center justify-center rounded-box border border-base-300 bg-base-100 p-3"
                >
                  <img
                    src="https://img.daisyui.com/images/daisyui/mark.svg"
                    alt="daisyUI"
                    class="size-full object-contain"
                    width="56"
                    height="56"
                    loading="lazy"
                  />
                </span>
              </div>
              <h3 class="font-title mt-7 text-3xl leading-none font-bold">
                {$t(conversionTools[1].title)}
              </h3>
              <p class="mt-4 leading-relaxed text-base-content/60">
                {$t(conversionTools[1].description)}
              </p>
            </div>
          </article>

          <article class="card card-border bg-base-100 text-start lg:col-span-5">
            <div class="card-body p-7 sm:p-8">
              <div
                class="flex items-center gap-4"
                aria-label={$t("Screenshot converts to daisyUI")}
              >
                <span
                  class="flex size-14 items-center justify-center rounded-box border border-base-300 bg-base-200 p-3 text-base-content/70"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="1.8"
                    class="size-full"
                    aria-hidden="true"
                  >
                    <rect x="3" y="4" width="18" height="16" rx="2"></rect>
                    <path d="m7 16 3.2-3.2 2.3 2.3 2.4-2.4L18 16"></path>
                    <circle cx="8" cy="9" r="1.2"></circle>
                  </svg>
                  <span class="sr-only">{$t("Screenshot")}</span>
                </span>
                <span class="text-base-content/35">{@render arrowIcon()}</span>
                <span
                  class="flex size-14 items-center justify-center rounded-box border border-base-300 bg-base-200 p-3"
                >
                  <img
                    src="https://img.daisyui.com/images/daisyui/mark.svg"
                    alt="daisyUI"
                    class="size-full object-contain"
                    width="56"
                    height="56"
                    loading="lazy"
                  />
                </span>
              </div>
              <h3 class="font-title mt-7 text-3xl leading-none font-bold">
                {$t(conversionTools[2].title)}
              </h3>
              <p class="mt-4 leading-relaxed text-base-content/60">
                {$t(conversionTools[2].description)}
              </p>
            </div>
          </article>

          <article class="card card-border bg-base-100 text-start lg:col-span-5">
            <div class="card-body p-7 sm:p-8">
              <div class="flex items-center gap-4" aria-label={$t("Bootstrap converts to daisyUI")}>
                <span
                  class="flex size-14 items-center justify-center rounded-box border border-base-300 bg-base-200 p-3"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 118 94"
                    class="size-full"
                    width="56"
                    height="56"
                    role="img"
                    aria-label="Bootstrap"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M24.509 0c-6.733 0-11.715 5.893-11.492 12.284.214 6.14-.064 14.092-2.066 20.577C8.943 39.365 5.547 43.485 0 44.014v5.972c5.547.529 8.943 4.649 10.951 11.153 2.002 6.485 2.28 14.437 2.066 20.577C12.794 88.106 17.776 94 24.51 94H93.5c6.733 0 11.714-5.893 11.491-12.284-.214-6.14.064-14.092 2.066-20.577 2.009-6.504 5.396-10.624 10.943-11.153v-5.972c-5.547-.529-8.934-4.649-10.943-11.153-2.002-6.484-2.28-14.437-2.066-20.577C105.214 5.894 100.233 0 93.5 0H24.508zM80 57.863C80 66.663 73.436 72 62.543 72H44a2 2 0 01-2-2V24a2 2 0 012-2h18.437c9.083 0 15.044 4.92 15.044 12.474 0 5.302-4.01 10.049-9.119 10.88v.277C75.317 46.394 80 51.21 80 57.863zM60.521 28.34H49.948v14.934h8.905c6.884 0 10.68-2.772 10.68-7.727 0-4.643-3.264-7.207-9.012-7.207zM49.948 49.2v16.458H60.91c7.167 0 10.964-2.876 10.964-8.281 0-5.406-3.903-8.178-11.425-8.178H49.948z"
                      fill="#712cf9"
                    ></path>
                  </svg>
                </span>
                <span class="text-base-content/35">{@render arrowIcon()}</span>
                <span
                  class="flex size-14 items-center justify-center rounded-box border border-base-300 bg-base-200 p-3"
                >
                  <img
                    src="https://img.daisyui.com/images/daisyui/mark.svg"
                    alt="daisyUI"
                    class="size-full object-contain"
                    width="56"
                    height="56"
                    loading="lazy"
                  />
                </span>
              </div>
              <h3 class="font-title mt-7 text-3xl leading-none font-bold">
                {$t(conversionTools[3].title)}
              </h3>
              <p class="mt-4 leading-relaxed text-base-content/60">
                {$t(conversionTools[3].description)}
              </p>
            </div>
          </article>

          <article
            class="card card-border overflow-hidden bg-neutral text-start text-neutral-content lg:col-span-7"
          >
            <div class="card-body p-7 sm:p-9">
              <div
                class="flex items-center gap-4"
                aria-label={$t("Image palette converts to daisyUI")}
              >
                <span
                  class="grid size-14 grid-cols-2 overflow-hidden rounded-box border border-neutral-content/15"
                  role="img"
                  aria-label={$t("Image color palette")}
                >
                  <span class="bg-secondary"></span>
                  <span class="bg-accent"></span>
                  <span class="bg-neutral"></span>
                  <span class="bg-base-100"></span>
                </span>
                <span class="text-neutral-content/45">{@render arrowIcon()}</span>
                <span
                  class="flex size-14 items-center justify-center rounded-box bg-neutral-content/10 p-3"
                >
                  <img
                    src="https://img.daisyui.com/images/daisyui/mark.svg"
                    alt="daisyUI"
                    class="size-full object-contain"
                    width="56"
                    height="56"
                    loading="lazy"
                  />
                </span>
              </div>
              <h3 class="font-title mt-7 text-3xl leading-[0.95] font-bold sm:text-4xl">
                {$t("Picture color palette to a daisyUI theme")}
              </h3>
              <p class="mt-4 max-w-2xl leading-relaxed text-neutral-content/65">
                {$t(conversionTools[4].description)}
              </p>
            </div>
          </article>
        </div>
      </div>
    </section>

    <section id="demos" use:revealOnScroll={"demos"} class="border-b border-base-300">
      <div
        class="mx-auto max-w-[96rem] px-4 py-24 transition-[opacity,transform] duration-700 motion-reduce:transition-none sm:px-8 lg:py-36"
        class:translate-y-4={pageReady && !visibleSections.includes("demos")}
        class:opacity-0={pageReady && !visibleSections.includes("demos")}
      >
        <div class="mx-auto grid max-w-7xl gap-10 lg:items-end">
          <div>
            <h2
              class="font-title mt-5 text-5xl leading-[0.88] font-semibold tracking-[-0.05em] sm:text-7xl lg:text-8xl"
            >
              {$t("See Blueprint in action")}
            </h2>
          </div>
          <p
            class="max-w-2xl text-lg leading-relaxed text-base-content/60 lg:justify-self-end lg:pb-2"
          >
            {$t(
              "Watch Blueprint's MCP server create unique, authentic UIs from a simple prompt. The server gives your AI agent the context it needs: design-system principles, code snippets, and UX direction. When the page is finished, Blueprint inspects the code and fixes visual issues.",
            )}
          </p>
        </div>

        <div
          class="carousel carousel-center mt-16 w-full gap-4 lg:grid lg:grid-cols-2 lg:overflow-visible"
        >
          <div id="demo-1" class="carousel-item w-[92%] md:w-[68%] lg:w-full">
            <article class="card card-border w-full overflow-hidden bg-base-100">
              <div class="aspect-video bg-base-200">
                <iframe
                  class="h-full w-full"
                  src="https://www.youtube.com/embed/Z70rWqKRitI?autoplay=0&controls=1&rel=0&modestbranding=1"
                  title="Make a profile settings UI with agents - Blueprint MCP v1.5"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  loading="lazy"
                  allowfullscreen
                ></iframe>
              </div>
            </article>
          </div>
          <div id="demo-2" class="carousel-item w-[92%] md:w-[68%] lg:w-full">
            <article class="card card-border w-full overflow-hidden bg-base-100">
              <div class="aspect-video bg-base-200">
                <iframe
                  class="h-full w-full"
                  src="https://www.youtube.com/embed/Y6WAi5ILAKI?autoplay=0&controls=1&rel=0&modestbranding=1"
                  title="Make a dashboard UI with MCP - Blueprint v1.5"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  loading="lazy"
                  allowfullscreen
                ></iframe>
              </div>
            </article>
          </div>
          <div id="demo-3" class="carousel-item w-[92%] md:w-[68%] lg:w-full">
            <article class="card card-border w-full overflow-hidden bg-base-100">
              <div class="aspect-video bg-base-200">
                <iframe
                  class="h-full w-full"
                  src="https://www.youtube.com/embed/H2sG-3iL3PA?autoplay=0&controls=1&rel=0&modestbranding=1"
                  title="Redesign Rails website with Blueprint MCP server v1.5"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  loading="lazy"
                  allowfullscreen
                ></iframe>
              </div>
            </article>
          </div>
          <div id="demo-4" class="carousel-item w-[92%] md:w-[68%] lg:w-full">
            <article class="card card-border w-full overflow-hidden bg-base-100">
              <div class="aspect-video bg-base-200">
                <iframe
                  class="h-full w-full"
                  src="https://www.youtube.com/embed/IPNnK0mcKoY?autoplay=0&controls=1&rel=0&modestbranding=1"
                  title="Generate a chat UI with MCP - Blueprint v1.5"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  loading="lazy"
                  allowfullscreen
                ></iframe>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>

    <section
      id="compare"
      use:revealOnScroll={"compare"}
      class="scroll-mt-16 border-b border-base-300 bg-base-200/45"
    >
      <div
        class="mx-auto max-w-7xl px-4 py-24 transition-[opacity,transform] duration-700 motion-reduce:transition-none sm:px-8 lg:py-36"
        class:translate-y-4={pageReady && !visibleSections.includes("compare")}
        class:opacity-0={pageReady && !visibleSections.includes("compare")}
      >
        <div class="grid gap-10 lg:grid-cols-[auto_1fr] lg:items-end">
          <div>
            <div class="font-mono text-xs text-base-content/45">
              {$t("COMPARE WITH OTHER OPTIONS")}
            </div>
            <h2
              class="font-title mt-5 whitespace-nowrap text-4xl leading-[0.82] font-semibold tracking-[-0.06em] sm:text-7xl lg:text-8xl"
            >
              {$t("All-in-one.")}
            </h2>
          </div>
          <p
            class="max-w-2xl text-lg leading-relaxed text-base-content/60 lg:justify-self-end lg:pb-2"
          >
            {$t(
              "Documentation context helps an LLM answer questions. Blueprint surrounds that official source with project setup, creative direction, page architecture, exact component retrieval, conversion workflows, and a final inspection gate.",
            )}
          </p>
        </div>

        <div class="mt-16 max-w-full overflow-x-auto border border-base-300 bg-base-100">
          <table class="table table-sm min-w-[64rem]">
            <caption class="sr-only">
              {$t("Comparison of daisyUI Blueprint MCP, daisyUI Skill, Context7 MCP, and GitMCP")}
            </caption>
            <thead>
              <tr>
                {#each compareTable[0] as header, headerIndex}
                  <th scope="col" class="text-start" class:bg-base-200={headerIndex === 1}>
                    {@html header ? $t(header) : ""}
                  </th>
                {/each}
              </tr>
            </thead>
            <tbody>
              {#each compareTable.slice(1) as row}
                <tr>
                  {#each row as cell, cellIndex}
                    {#if cellIndex === 0}
                      <th scope="row" class="text-start font-medium">
                        {@render comparisonCell(cell)}
                      </th>
                    {:else}
                      <td class="text-start" class:bg-base-200={cellIndex === 1}>
                        {@render comparisonCell(cell)}
                      </td>
                    {/if}
                  {/each}
                </tr>
              {/each}
            </tbody>
          </table>
        </div>
      </div>
    </section>

    <section id="faq" class="scroll-mt-16 border-b border-base-300">
      <div
        class="mx-auto grid max-w-7xl gap-14 px-4 py-24 sm:px-8 lg:grid-cols-[.7fr_1.3fr] lg:py-36"
      >
        <div>
          <h2
            class="font-title mt-5 text-7xl leading-[0.82] font-semibold tracking-[-0.06em] text-base-content/10 sm:text-8xl lg:text-9xl"
          >
            F.A.Q.
          </h2>
          <p class="mt-7 max-w-sm text-sm leading-relaxed text-base-content/55">
            {$t("Need something else? Email")}
            <a class="link link-hover" href="mailto:help@daisyui.com">help@daisyui.com</a>
            {$t("and we will help.")}
          </p>
        </div>

        <div class="divide-y divide-base-300 border-y border-base-300">
          {#each faqItems as faq, index}
            <div class="collapse collapse-plus rounded-none">
              <input
                type="radio"
                name="blueprint-faq"
                checked={index === 0}
                aria-label={faq.question}
              />
              <div class="collapse-title px-1 text-base font-semibold">
                {$t(faq.question)}
              </div>
              <div class="collapse-content px-1 text-sm leading-relaxed text-base-content/65">
                <p class="pb-2">{$t(faq.answer)}</p>
                {#if faq.href}
                  <a
                    class="link link-hover mb-4 inline-block font-medium"
                    href={faq.href}
                    target={faq.href.startsWith("http") ? "_blank" : undefined}
                    rel={faq.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  >
                    {$t(faq.linkLabel)}
                  </a>
                {/if}
              </div>
            </div>
          {/each}
        </div>
      </div>
    </section>

    <section id="pricing" class="scroll-mt-16 border-b border-base-300 bg-base-200/45">
      <div class="mx-auto max-w-7xl px-4 py-24 sm:px-8 lg:py-36">
        <h2
          class="font-title max-w-3xl text-5xl leading-[0.9] font-semibold tracking-[-0.055em] sm:text-7xl"
        >
          Get Blueprint
        </h2>

        <div class="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:items-stretch">
          {#each pricingPlans as plan}
            {#if plan.popular}
              <div class="aura aura-rainbow h-full w-full motion-reduce:animate-none">
                <article
                  class="card h-full w-full bg-base-100 shadow-sm transition-shadow duration-300 hover:shadow-lg motion-reduce:transition-none"
                  aria-labelledby={`pricing-${plan.slug}`}
                >
                  {@render pricingCardContent(plan)}
                </article>
              </div>
            {:else}
              <article
                class="card card-border relative h-full bg-base-100 shadow-sm transition-shadow duration-300 hover:shadow-lg motion-reduce:transition-none"
                aria-labelledby={`pricing-${plan.slug}`}
              >
                {@render pricingCardContent(plan)}
              </article>
            {/if}
          {/each}
        </div>

        <p class="mt-8 text-center text-sm text-base-content/50">
          3 day free trial - cancel anytime · Secure checkout · License key delivered by email
        </p>
      </div>
    </section>

    <section class="-mb-20 bg-neutral text-neutral-content">
      <div class="mx-auto max-w-7xl px-4 py-24 sm:px-8 lg:py-32">
        <div class="grid gap-12 lg:grid-cols-[1fr_auto] lg:items-end">
          <div>
            {@render blueprintWordmark()}
            <p class="mt-10 font-mono text-xs tracking-[0.18em] text-neutral-content/45 uppercase">
              {$t("The official daisyUI MCP server")}
            </p>
            <h2
              class="font-title mt-5 max-w-5xl text-6xl leading-[0.85] font-semibold tracking-[-0.055em] sm:text-8xl lg:text-9xl"
            >
              {$t("The most powerful agentic UI workflow in an MCP server")}
            </h2>
          </div>
          <div class="flex flex-wrap gap-3 lg:justify-end">
            <a
              class="btn btn-lg btn-primary"
              href={checkoutUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              {@render keyIcon()}
              {$t("Get the license")}
            </a>
            <a class="btn btn-lg" href="/blueprint/cursor/">
              {@render bookIcon()}
              {$t("Install guide")}
            </a>
          </div>
        </div>

        <div
          role="note"
          class="alert mt-12 border border-neutral-content/10 bg-neutral-content/5 text-neutral-content"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="size-5 shrink-0 text-success"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="3"
              d="M5 12l5 5L20 7"
            ></path>
          </svg>
          <span class="grow">
            <span class="block">{$t("Your license key arrives by email.")}</span>
            <span class="block">
              {$t("Add it to the MCP server and ask your coding agent to use Blueprint.")}
            </span>
          </span>
        </div>
      </div>
    </section>
  </main>
</div>

<StoreFooter />
