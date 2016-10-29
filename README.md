# synthesizer

*A react-redux app where you can play various synthesizers.*

## Table of Contents

- [Installation](#installation)
- [Getting Started/Usage](#getting-startedusage)
- [Commands](#commands)
- [Testing](#testing)
- [Linting](#linting)
- [Architecture/Development](#architecturedevelopment)
  - [About](#about)
  - [Technologies](#technologies)
  - [Folder Structure](#folder-structure)
- [TODO](#todo)
- [Thanks](#thanks)

<a name="installation"></a>
## Installation

```bash
$ git clone git@github.com:ferdythebull/synthesizer.git
$ cd synthesizer
$ npm install
```

<a name="getting-startedusage"></a>
## Getting Started/Usage

```bash
## normal day development

# Builds webpack assets and runs server in development mode
$ npm start

# Builds and watches webpack assets and runs server in development mode (restarts during changes)
$ npm run watch:dev

## build for production

# Builds webpack assets for production
$ npm run build:prod

# Builds webpack assets and runs server in production mode
$ npm run build:serve:prod
```

<a name="commands"></a>
## Commands

Use `npm run` to get a list of commands available

```bash
## Builds webpack assets
# npm run build - alias
# npm run build:dev - alias
$ npm run webpack

## Builds webpack assets for production
$ npm run build:prod

## Builds webpack assets and runs server in development mode
# npm run start - alias
$ npm run build:serve

## Builds webpack assets and runs server in production mode
$ npm run build:serve:prod

## Builds and watches webpack assets and runs server in
## development mode (restarts during changes)
# npm run dev - alias
# npm run watch:dev - alias
$ npm run build:watch

## Runs eslint
$ npm run lint

## Serves application for development
$ npm run serve

## Serves application for production
$ npm run serve:prod

## Runs mocha tests
$ npm run test

## Runs mocha tests and watches for changes
$ npm run test:watch

## Watches for webpack changes and rebuilds
$ npm run webpack:watch

```

<a name="testing"></a>
## Testing

```bash
$ npm run test

# Runs tests and watches for changes
$ npm run test:watch
```

<a name="linting"></a>
## Linting

```bash
# Runs eslint with a custom Airbnb preset.
# If you run into a questionable lint error,
# create an issue.
$ npm run lint
```

<a name="architecturedevelopment"></a>
## Architecture/Development

<a name="about"></a>
### About

This is an app that allows you to play synthesizers online.

<a name="technologies"></a>
### Technologies

* react
* redux
* react-router
* react-router-redux
* redux-connect
* redux-thunk
* ES2015/babel
* webpack
* webpack-isomorphic-tools
* koa

<a name="folder-structure"></a>
### Folder Structure

```
 |-dist
 |   Folder where the source code builds to
 |-src
 |   All source code
 |---assets
 |     Static assets for distribution (images, icons, icon fonts, etc)
 |-----images
 |---client
 |     Client related files
 |---components
 |     Contains React components
 |-----Component
 |       Component folder
 |-------Component.jsx - React component JSX file
 |-------Component.connector.js
 |         Connector file Higher Order Component
 |-------Component.translator.js
 |         Translator file Higher Order Component
 |-------index.js
 |         Composer that takes multiple Higher Order Components and
 |         the Component and returns a composed component.
 |---data
 |     Files relating to getting API data
 |---redux
 |     Contains redux related files
 |-----middleware
 |       Redux middleware folder
 |-----modules
 |       Redux modules. Can be connected to any component
 |-----createStore.js
 |       Creates redux store
 |-----reducers.js
 |       Hooks all reducers up
 |---routes
 |     Contains page routes
 |-----pages
 |-------Page.route.js
 |         Page route file
 |-----createRoutes.js
 |       Entry point for creating new routes
 |-----matchRoutes.js
 |       Function to match routes async for server and client
 |---sass
 |     All sass files relating to the UI framework
 |---server
 |   Server related files
 |-----config
 |-------index.js
 |         CommonJS written config file to be used in ES6 and Node.js
 |-------koa.js
 |         Middleware configuration
 |---server.js
 |     Koa server file
 |---client.js
 |     Client entry file
 |-test
 |   Test folder for all unit and e2e tests
 |---unit
 |     Unit testing files that match src folder
 |-----components
 |---e2e
 |     End to end tests
 |-webpack
 |   Webpack related config and files
 |-.editorconfig
 |   Setup spacing for editors
 |-.gitignore
 |   Git files/folders to be ignored
 |-index.js
 |   Entry point for server
 |-package.json
 |   Lists NPM dependencies, eslint and babel config, scripts
 |-README.md
 |   Where the bulk of the documentation is

```

#### components

The components folder contains all React components

##### Rules for components

* The naming of the folder is capitalized
* A component can have a `sass` folder
* A component can be made of many other smaller components
* Components must have data abstracted out to a root component (root component should be named as the same as the folder)
* Components should aim to be dumb (rely on props to render)
* A component can have a higher order component file
  * A higher order component must be named with the component and the higher order component name appended to it. Eg. boilerplate.connector.js (connector referring to as react-redux connector), boilerplate.translator.js (translator referring to react-i18next translator)
* A component should not be responsible for making data calls
* A component connector should wire up action creators with components
* The index file of the component should compose higher order components. Eg.
`translator(connector(Boilerplate))` vs `composer(connector, translator)(Boilerplate)` (See src/utils/hocComposer.js)

#### redux

The redux folder contains the store, action creators, and reducers.

##### Rules for redux
* The store is the single source of truth
* The store can only be modified via `reducers`
* Reducer are invoked via action creators
* Action creators return actions with payloads of information to change state
* Reducers, actions, and action creators can be though of as having a many to many relationship
* Thunk action creators that are async must have Async as a suffix to its function name
* A redux file in the modules folder handles reducers, actions, and action creators
* The `reducers.js` file wires up all reducers (except for route specific ones)

##### Related documentation
* [http://redux.js.org/docs/introduction/index.html](http://redux.js.org/docs/introduction/index.html)
* [https://github.com/erikras/ducks-modular-redux](https://github.com/erikras/ducks-modular-redux)
* [https://github.com/gaearon/redux-thunk](https://github.com/gaearon/redux-thunk)

#### routes
* Routes are dynamically bundled by webpack via `require.ensure`
* Routes handle navigating from "page" to "page"

#### test
It's important to write tests. Luckily, tests are pretty easy to write with mocha. Please keep these best practices in mind when writing tests.

Unit tests should...
* be named after the piece of code its testing
* mimic the folder structure of the code to be tested
* not rely on external code

##### Here are some related links for the testing framework
* [http://airbnb.io/enzyme/docs/guides/mocha.html](http://airbnb.io/enzyme/docs/guides/mocha.html)
* [http://chaijs.com/api/bdd/](http://chaijs.com/api/bdd/)


<a name="todo"></a>
### TODO
* convert boilerplate to synthesizer structure
* add redux store for master page file that imports in
  * header
  * body
  * footer
* add in first synthesizer
* add in tests
* add linter for scss

<a name="thanks"></a>
### THANKS
Special thanks to these repositories and tutorials.
* Big thanks to [Yamaha DX7]() by Matt Montag. Your Yamaha DX7 Synth was the inspiration behind this project. It was fun translating your code from Angular to React
* [The Web Audio API](https://code.tutsplus.com/tutorials/the-web-audio-api-make-your-own-web-synthesizer--cms-23887) on tutsplus for giving me a basis on how Web Audio API works
* [Learning Pixi](https://github.com/kittykatattack/learningPixi) for giving me a basis on how pixi.js works
