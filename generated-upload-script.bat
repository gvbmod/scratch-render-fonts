@echo off
echo Pushing scratch-render-fonts to github...
git lfs uninstall
git init
git rm -r --cached .
git add .
git commit -m "Upload main source code."
git branch -M main
git remote add origin https://github.com/gvbmod/scratch-render-fonts.git
git push -f --no-verify origin main