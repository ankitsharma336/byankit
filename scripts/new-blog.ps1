param(
    [Parameter(Mandatory)]
    [string]$Title
)

$date = Get-Date -Format "yyyy-MM-dd"

$slug = $Title.ToLower()
$slug = $slug.Replace(" ","-")

$file = "blog/$date-$slug.md"

@"
---
slug: $slug
title: $Title
authors: [ankit]
tags:
  - Civil Engineering
---

# $Title

## Introduction

Write your blog here.
"@ | Set-Content $file

Write-Host ""
Write-Host "Blog created:"
Write-Host $file