#!/bin/bash
set -e

echo "=== EAS Build Pre-Install Script ==="
echo "Current directory: $(pwd)"
echo "Node version: $(node --version)"
echo "NPM version: $(npm --version)"

# Install dependencies using npm
echo "Installing dependencies with npm..."
npm install --legacy-peer-deps

echo "=== Dependencies installed successfully ===" 
echo "Checking expo installation..."
npx expo --version
