cd ./build/generic-legacy
git init
git remote add origin git@github.com:Meeken1998/pdf-viewer.git
git add .
git commit -m 'publish'
git push origin master --force
echo 'done'