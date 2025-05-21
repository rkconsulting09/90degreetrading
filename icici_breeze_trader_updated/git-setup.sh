#!/bin/bash
# GitHub push script for ICICI Breeze Trader app (Updated)

echo "Initializing Git repo..."
git init
git remote add origin https://github.com/rkconsulting09/90degreetrading.git
git add .
git commit -m "Updated: TradingView webhook, Telegram reports, DB backup"
git branch -M main
git push -u origin main

echo "✅ Code pushed to https://github.com/rkconsulting09/90degreetrading"
