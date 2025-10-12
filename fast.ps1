

# This script installs Tailwind CSS Standalone file and daisyUI.
# - Downloads the latest Tailwind CSS binary for the detected OS and architecture.
# - Downloads the daisyUI bundle file.
# - Creates input.css
# - Runs Tailwind CSS to generate output.css

$ErrorActionPreference = "Stop"

# Configuration
$TAILWIND_BASE_URL = "https://github.com/tailwindlabs/tailwindcss/releases/latest/download"
$DAISYUI_BASE_URL = "https://github.com/saadeghi/daisyui/releases/latest/download"
$INPUT_CSS_CONTENT = @'
@import "tailwindcss";

@source not "./tailwindcss.exe";
@source not "./daisyui{,*}.mjs";

@plugin "./daisyui.mjs";
'@

# Main
try {
    Write-Host "  >> Installing Tailwind CSS for Windows x64"
    
    curl.exe -sLo tailwindcss.exe "$TAILWIND_BASE_URL/tailwindcss-windows-x64.exe"
    
    Write-Host "  >> Installing daisyUI"
    curl.exe -sLo daisyui.mjs "$DAISYUI_BASE_URL/daisyui.mjs"
    curl.exe -sLo daisyui-theme.mjs "$DAISYUI_BASE_URL/daisyui-theme.mjs"
    
    Set-Content -Path "input.css" -Value $INPUT_CSS_CONTENT -NoNewline
    Write-Host "  >> Adding input.css"
    Write-Host "     .\tailwindcss.exe -i input.css -o output.css"
    & .\tailwindcss.exe -i input.css -o output.css | Write-Host
}
catch {
    Write-Host "  [X] Installation failed"
    exit 1
}
