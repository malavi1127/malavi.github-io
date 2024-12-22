@echo off
:: Navigate to the local repository folder
cd "C:\Users\manoh\manohardorreti.github-io"

:: Stage all changes
git add .

:: Commit the changes with a timestamp
git commit -m "Auto-upload on %date% at %time%"

:: Push changes to the GitHub repository
git push origin main

::Exit
exit