# Hackernews playground API with webpack/es6/redux/redux-observable/rxJx
 
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

### Components

#### Getting started

React components live in the `components` folder. Each component should be built in its own folder using [Atomic design](http://atomicdesign.bradfrost.com/chapter-2/) 

#### Building new components

I generally use **Stateless Functional (vanilla ES6)** design  for Atoms. We generally use **React Components (extends React.Component)** for molecules and organisms.

- [ ] I ensure components implement some kind of `shouldRender()` functionality to cover `.isRequired` props.
- [ ] I use a `renderXYZ()` style for partials, rather than inline `{ condition && <JSX /> }`.
- [ ] We ensure all components have complete [unit tests](#testing-components) (not just snapshots).

### Testing components

I'm using [Jest](https://facebook.github.io/jest/), [Enzyme](http://airbnb.io/enzyme/) to test components.

* Run `yarn test`


## Production

* Run `yarn build`
* Dist folder will be create with production, minimized version