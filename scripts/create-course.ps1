param(
    [Parameter(Mandatory)]
    [string]$Course
)

$courseFolder = $Course.ToLower().Replace(" ","-")

New-Item -ItemType Directory -Force -Path "docs/$courseFolder" | Out-Null

@"
---
sidebar_position: 1
title: Introduction
description: Introduction to $Course
---

# $Course

Welcome to the **$Course** course.
"@ | Set-Content "docs/$courseFolder/intro.md"

Write-Host ""
Write-Host "Course created:"
Write-Host "docs/$courseFolder"