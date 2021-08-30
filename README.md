## Initial folder setup

npm init -y
npm install
mkdir src

npm install --save three three-orbitcontrols dat.gui

## REACT

npm install --save react react-dom
touch src/index.{html,js}
npm install --save-dev parcel
npm install --save react-router-dom

Edit package.json

"start": "parcel src/index.html",

npm run start

## Reference

https://expo.dev/

## trouble shooting

npm install --global node-gyp node-gyp-build

npm install --global --production windows-build-tools
