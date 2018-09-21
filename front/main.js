//main.js
// const greeter = require('./HomePage.js');
// document.querySelector("#root").appendChild(greeter());

import React from 'react';
import ReactDOM from 'react-dom';
import Greeter from './src/HomePage';

console.log('main start..');
ReactDOM.render(<Greeter />, document.getElementById('root'))
