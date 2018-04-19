# Webpack es6 with Redux and RxJX 
This is sample small project build with React, Redux, RxJx, redux-observabled.
Main purpuse of project is to create a playground to have production ready product which will do http request to
hackernews and display it to user

## Getting started

Clone the repo and install Node dependencies
```
git clone https://github.com/marcelijanowski/react-webpack-es6-boilplate.git
yarn install
```

### Local development

* Run `yarn build`:  this command is generating the bundles into `dist` folder.
* Your defulat web browser will open with localhost:9000

### Testing components

We are using [Jest](https://facebook.github.io/jest/), [Enzyme](http://airbnb.io/enzyme/) to test components.

* Run `yarn test`


## Production

* Run `yarn build`
* Dist folder will be create with production, minimized version