//main.js
// const greeter = require('./HomePage.js');
// document.querySelector("#root").appendChild(greeter());

import React from 'react';
import ReactDOM from 'react-dom';
import App from "@/src/App";

console.log('main start..');
ReactDOM.render(<App />, document.getElementById('root'))
