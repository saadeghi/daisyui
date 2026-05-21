const skillEditors = [
  {
    name: "Copilot",
    slug: "copilot",
    icon: "copilot",
    agent: "github-copilot",
  },
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
    name: "OpenClaw",
    slug: "openclaw",
    icon: "openclaw",
    agent: "openclaw",
  },
  {
    name: "Windsurf",
    slug: "windsurf",
    icon: "windsurf",
    agent: "windsurf",
  },
  {
    name: "Gemini CLI",
    slug: "gemini-cli",
    icon: "gemini-cli",
    agent: "gemini-cli",
  },
  {
    name: "Antigravity",
    slug: "antigravity",
    icon: "antigravity",
    agent: "antigravity",
  },
]

export function load() {
  return {
    skillEditors,
  }
}
