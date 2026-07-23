$courses = (Get-ChildItem docs -Directory).Count

$lessons = (Get-ChildItem docs -Filter *.md -Recurse).Count

$blogs = 0
if(Test-Path blog){
    $blogs = (Get-ChildItem blog -Filter *.md).Count
}

$resources = 0
if(Test-Path docs/resources){
    $resources = (Get-ChildItem docs/resources -Filter *.md).Count
}

$images = 0
if(Test-Path static/img){
    $images = (Get-ChildItem static/img -Recurse -File).Count
}

Write-Host ""
Write-Host "======================================="
Write-Host "         BY ANKIT PROJECT STATUS"
Write-Host "======================================="
Write-Host ""
Write-Host "Courses     : $courses"
Write-Host "Lessons     : $lessons"
Write-Host "Blogs       : $blogs"
Write-Host "Resources   : $resources"
Write-Host "Images      : $images"
Write-Host ""
Write-Host "======================================="