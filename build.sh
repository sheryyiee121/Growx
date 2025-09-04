#!/bin/bash

echo "🚀 Building GrowX Website for Production..."

# Clean previous builds
echo "🧹 Cleaning previous builds..."
rm -rf .next out

# Install dependencies if needed
echo "📦 Installing dependencies..."
npm install

# Build the site
echo "🔨 Building site..."
npm run export

# Check if build was successful
if [ -d "out" ]; then
    echo "✅ Build successful! Site is ready in the 'out' folder."
    echo "📁 Contents of 'out' folder:"
    ls -la out/
    echo ""
    echo "🌐 Your site is ready for deployment!"
    echo "📤 Upload the contents of the 'out' folder to your hosting service."
else
    echo "❌ Build failed! Check the error messages above."
    exit 1
fi
