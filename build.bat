@echo off
echo 🚀 Building GrowX Website for Production...

REM Clean previous builds
echo 🧹 Cleaning previous builds...
if exist .next rmdir /s /q .next
if exist out rmdir /s /q out

REM Install dependencies if needed
echo 📦 Installing dependencies...
call npm install

REM Build the site
echo 🔨 Building site...
call npm run export

REM Check if build was successful
if exist out (
    echo ✅ Build successful! Site is ready in the 'out' folder.
    echo 📁 Contents of 'out' folder:
    dir out
    echo.
    echo 🌐 Your site is ready for deployment!
    echo 📤 Upload the contents of the 'out' folder to your hosting service.
) else (
    echo ❌ Build failed! Check the error messages above.
    pause
    exit /b 1
)

pause
