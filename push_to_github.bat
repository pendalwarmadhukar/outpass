@echo off
setlocal enabledelayedexpansion

echo ==========================================
echo       GITHUB PUSH REPAIR TOOL
echo ==========================================

cd "c:\Users\madhu\Desktop\outpass"

echo [1/6] Cleaning up nested git folders...
if exist "frontend\.git" (
    echo   - Removing frontend\.git...
    rmdir /s /q "frontend\.git"
)
if exist "backend\.git" (
    echo   - Removing backend\.git...
    rmdir /s /q "backend\.git"
)

echo [2/6] Initializing main repository in root...
if exist ".git" rmdir /s /q ".git"
git init

echo [3/6] Setting up project info...
echo "# Outpass Project" > README.md

echo [4/6] Adding ALL files (Backend + Frontend)...
git add .

echo [5/6] Committing changes...
git commit -m "Initial commit of full outpass project"

echo [6/6] Connecting to GitHub and Pushing...
git branch -M main
git remote add origin https://github.com/pendalwarmadhukar/outpass.git

echo ------------------------------------------
echo IMPORTANT: A window may pop up asking you to sign in to GitHub.
echo Please follow the prompts to complete the push.
echo ------------------------------------------

git push -u origin main --force

echo ==========================================
echo DONE! Please check https://github.com/pendalwarmadhukar/outpass
echo ==========================================
pause
