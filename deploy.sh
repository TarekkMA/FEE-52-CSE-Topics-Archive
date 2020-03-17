#!/usr/bin/env sh


# build
yarn build

git add -A
git commit -m 'deploy'

git push

cd -