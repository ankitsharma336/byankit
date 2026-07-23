param(
    [Parameter(Mandatory)]
    [string]$Course,

    [Parameter(Mandatory)]
    [string]$Lesson
)

$courseFolder = $Course.ToLower().Replace(" ","-")
$lessonSlug = $Lesson.ToLower().Replace(" ","-")

if (!(Test-Path "docs/$courseFolder")) {
    Write-Host "Course does not exist."
    exit
}

$file = "docs/$courseFolder/$lessonSlug.md"

@"
---
title: $Lesson
description: Learn about $Lesson
---

# $Lesson

## Learning Outcomes

- Understand ...
- Explain ...
- Solve ...

---

## Introduction

Write here.

---

## Theory

Write here.

---

## Example

---

## Summary

---

## Practice Questions

1.

2.

3.
"@ | Set-Content $file

Write-Host ""
Write-Host "Lesson created:"
Write-Host $file