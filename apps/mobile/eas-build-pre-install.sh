#!/bin/bash
set -e

# Install dependencies in the mobile app directory first
# This ensures expo-router and other plugins are available before config is read
npm install --legacy-peer-deps
