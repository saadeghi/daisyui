#!/usr/bin/env bash

# This script installs Tailwind CSS Standalone file and daisyUI.
# - Downloads the latest Tailwind CSS binary for the detected OS and architecture.
# - Downloads the daisyUI bundle file.
# - Creates input.css
# - Runs Tailwind CSS to generate output.css

set -euo pipefail

# Configuration
DEST_PATH="${1:-.}"
TAILWIND_BASE_URL="https://github.com/tailwindlabs/tailwindcss/releases/latest/download"
DAISYUI_BASE_URL="https://github.com/saadeghi/daisyui/releases/latest/download"
INPUT_CSS_CONTENT='@import "tailwindcss";

@source not "./tailwindcss";
@source not "./daisyui{,*}.mjs";

@plugin "./daisyui.mjs";'

# Error handler
trap 'echo "  ❌ Installation failed" >&2; exit 1' ERR

# Pure functions
get_os() {
    case "$(uname -s)" in
        Linux*) echo "linux";;
        Darwin*) echo "macos";;
        *) echo "unknown";;
    esac
}

get_arch() {
    case "$(uname -m)" in
        x86_64|amd64) echo "x64";;
        aarch64|arm64) echo "arm64";;
        *) echo "unknown";;
    esac
}

get_musl_suffix() {
    [ "$(uname -s)" = "Linux" ] && ldd --version 2>&1 | grep -q musl && echo "-musl" || echo ""
}

format_os() {
    case "$1" in
        linux) echo "Linux";;
        macos) echo "macOS";;
        *) echo "$1";;
    esac
}

build_filename() {
    echo "tailwindcss-$1-$2$3"
}

build_url() {
    echo "$1/$2"
}

# Main
main() {
    local os=$(get_os)
    local arch=$(get_arch)
    
    [ "$os" = "unknown" ] || [ "$arch" = "unknown" ] && echo "❌ Unsupported system" >&2 && exit 1
    
    mkdir -p "$DEST_PATH"
    cd "$DEST_PATH"
    
    echo "  🚚 Installing Tailwind CSS for $(format_os "$os") $arch"
    
    local filename=$(build_filename "$os" "$arch" "$(get_musl_suffix)")
    curl -fsSLo tailwindcss "$(build_url "$TAILWIND_BASE_URL" "$filename")"
    chmod +x tailwindcss
    
    echo "  🚚 Installing daisyUI"
    curl -fsSLo daisyui.mjs "$(build_url "$DAISYUI_BASE_URL" "daisyui.mjs")"
    curl -fsSLo daisyui-theme.mjs "$(build_url "$DAISYUI_BASE_URL" "daisyui-theme.mjs")"
    
    echo "$INPUT_CSS_CONTENT" > input.css
    echo "  ✅ Adding input.css"
    echo "./tailwindcss -i input.css -o output.css"
    ./tailwindcss -i input.css -o output.css
}

main
