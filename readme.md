# React Native Template

This template is required these `packages`:
1. `react-native-router-flux` for navigation. 
2. `immutable` for modelling.
3. `redux`, `react-redux`, & `redux-thunk` from store management.
4. `crossroads` for deeplinking.
5. `i18n` for localization.

## Installation & Run
1. Clone or fork the repo.
2. Run `npm install`.
3. Run `react-native run-{platform}`. Platform is either `ios` or `android`.

## Requirements
1. Make sure `react-native` is installed
2. Have understanding on *Redux*

## Structure
1. Folder `redux` contains `actions` & `reducers`. If you add new `reducer`, it needs to import to `rootReducers.js` on folder `configs`.
2. Navigations are handled by `react-native-router-flux`, new pages are added to `configs/configRouter.js`.
3. Avoid to use absolute path. Every folder has their own `package.json`, it registered the alias of the folder.