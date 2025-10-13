#!/bin/bash
cd /home/kavia/workspace/code-generation/damsara-driving-school-website-18704-18716/hi_frontend
npm run build
EXIT_CODE=$?
if [ $EXIT_CODE -ne 0 ]; then
   exit 1
fi

