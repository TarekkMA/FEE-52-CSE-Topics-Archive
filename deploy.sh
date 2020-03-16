#!/usr/bin/env sh


# build
yarn build

git add -A
git commit -m 'deploy'

git push https://github.com:tarekkma/FEE-52-CSE-Topics-Archive.git master:gh-pages

cd -