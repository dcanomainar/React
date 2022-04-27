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
* Polyfill features that are missing in your target environment (throug a third-party polyfill such as core-js)
* Source code transformations (codemods)

## Prerequirements

Imports this three lines to work with React and Babel:

```html
<script crossorigin src="https://unpkg.com/react@16/umd/react.production.min.js"></script>
<script crossorigin src="https://unpkg.com/react-dom@16/umd/react-dom.production.min.js"></script>
<script src="https://unpkg.com/babel-standalone@6/babel.min.js"></script>
```

