

# This script installs Tailwind CSS Standalone file and daisyUI.
# - Downloads the latest Tailwind CSS binary for the detected OS and architecture.
# - Downloads the daisyUI bundle file.
# - Creates input.css
# - Runs Tailwind CSS to generate output.css

param(
    [string]$DestPath = "."
)

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

# Pure functions
function Get-Arch {
    switch ($env:PROCESSOR_ARCHITECTURE) {
        "AMD64" { return "x64" }
        "ARM64" { return "arm64" }
        default { return "unknown" }
    }
}

function Build-Filename {
    param([string]$Arch)
    return "tailwindcss-windows-$Arch.exe"
}

function Build-Url {
    param([string]$BaseUrl, [string]$Filename)
    return "$BaseUrl/$Filename"
}

# Main
try {
    $arch = Get-Arch
    
    if ($arch -eq "unknown") {
        Write-Host "  ❌ Unsupported system" -ForegroundColor Red
        exit 1
    }
    
    New-Item -ItemType Directory -Force -Path $DestPath | Out-Null
    Set-Location $DestPath
    
    Write-Host "  🚚 Installing Tailwind CSS for Windows $arch"
    
    $filename = Build-Filename -Arch $arch
    $url = Build-Url -BaseUrl $TAILWIND_BASE_URL -Filename $filename
    Invoke-WebRequest -Uri $url -OutFile "tailwindcss.exe" -UseBasicParsing
    
    Write-Host "  🚚 Installing daisyUI"
    Invoke-WebRequest -Uri (Build-Url -BaseUrl $DAISYUI_BASE_URL -Filename "daisyui.mjs") -OutFile "daisyui.mjs" -UseBasicParsing
    Invoke-WebRequest -Uri (Build-Url -BaseUrl $DAISYUI_BASE_URL -Filename "daisyui-theme.mjs") -OutFile "daisyui-theme.mjs" -UseBasicParsing
    
    Set-Content -Path "input.css" -Value $INPUT_CSS_CONTENT
    Write-Host "  ✅ Adding input.css"
    Write-Host ".\tailwindcss.exe -i input.css -o output.css"
    & .\tailwindcss.exe -i input.css -o output.css
}
catch {
    Write-Host "  ❌ Installation failed" -ForegroundColor Red
    exit 1
}
