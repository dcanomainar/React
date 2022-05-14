# React

[TOC]

## Introduction

### React

React is a JavaScript library for building user interfaces. The main things that can do are:

* Is a Declarative Library
* Is Component-Based
* Is efficient
* Is Predictable (its information works in one direction)
* Server-side with Node
* Mobile applications with React Native

Most basic application we could write:

```javascript
const divRoot = document.querySelector('#root');
const h1Tag = <h1>Hello World </h1>;

ReactDOM.render(h1Tag, divRoot);
```

### Babel

Babel is a toolchain that is mainly used to convert ECMAScript 2015+ code into backwards compatible version of JavaScript in current and older browsers or environments. Here are the main things Babel can do for you:

* Transform syntax
* Polyfill features that are missing in your target environment (through a third-party polyfill such as core-js)
* Source code transformations (codemods)

## Prerequirements

Imports this three lines to work with React and Babel:

```html
<script crossorigin src="https://unpkg.com/react@16/umd/react.production.min.js"></script>
<script crossorigin src="https://unpkg.com/react-dom@16/umd/react-dom.production.min.js"></script>
<script src="https://unpkg.com/babel-standalone@6/babel.min.js"></script>
```

## First Steps

### Hello World

If we want to create our first react app, we will need to execute the following command:

```
npx create-react-app my-app
```

Where 'my-app' will be the name that we choose for our application. After this, we will have the following structure:

![](D:\Dani\Projects\React\React De cero a experto ( Hooks y MERN )\images\folder_content.png)

We can delete all the content of our src folder and just create a new file called 'index.js' with the following code:

```javascript
import React from 'react';
import {createRoot} from 'react-dom/client';

const salute = <h1>Hello World</h1>;
const divRootElement = document.querySelector('#root');
const divRoot = createRoot(divRootElement);

divRoot.render(salute);
```

### Main Commands

* #### `npm start`
  Runs the app in the development mode. Open [http://localhost:3000](http://localhost:3000/) to view it in the browser.

  The page will reload if you make edits. You will also see any lint errors in the console.

* #### `npm test`

  Launches the test runner in the interactive watch mode. See the section about [running tests](https://create-react-app.dev/docs/running-tests) for more information.

* #### `npm run build`

  Builds the app for production to the `build` folder. It correctly bundles React in production mode and optimizes the build for the best performance.

  The build is minified and the filenames include the hashes. If necessary, classnames and function names can be enabled for profiling purposes. See the [production build](https://create-react-app.dev/docs/production-build) section for more information.

  Your app is ready to be deployed! See the section about [deployment](https://create-react-app.dev/docs/deployment) for more information about deploying your application to popular hosting providers.

* #### `npm run eject`

  **Note: this is a one-way operation. Once you `eject`, you can’t go back!**

  If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

  Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc.) into your project as dependencies in `package.json`. Technically, the distinction between dependencies and development dependencies is pretty arbitrary for front-end apps that produce static bundles.

  In addition, it used to cause problems with some hosting platforms that didn't install development dependencies (and thus weren't able to build the project on the server or test it right before deployment). You are free to rearrange your dependencies in `package.json` as you see fit.

  All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

  You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

### CSS

If we want to work with CSS, we will require to create our new file:

### Components

In React we work with Functional Components (FC), which means that this components behave like functions. In order to create our component, we will create a new file (in UpperCamelCase):

```javascript
import React from "react";

const FirstApp = () => {
    return <h1>Hello World</h1>
}

export default FirstApp;
```

And link it in our 'index.js':

