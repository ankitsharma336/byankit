param(
    [Parameter(Mandatory)]
    [string]$Title
)

# Create slug
$slug = $Title.ToLower().Replace(" ", "-")

# Create folders if they don't exist
New-Item -ItemType Directory -Force -Path "docs/resources" | Out-Null
New-Item -ItemType Directory -Force -Path "static/downloads" | Out-Null

# Create markdown file
@"
---
title: $Title
---

# $Title

## Description

Write about this resource here.

## Download

[Download PDF](/downloads/$slug.pdf)
"@ | Set-Content "docs/resources/$slug.md"

# Create empty PDF placeholder
New-Item -ItemType File -Force -Path "static/downloads/$slug.pdf" | Out-Null

Write-Host "Resource created:"
Write-Host "docs/resources/$slug.md"
Write-Host "static/downloads/$slug.pdf"