//main.js
// const greeter = require('./Greeter.js');
// document.querySelector("#root").appendChild(greeter());

import React from 'react';
import ReactDOM from 'react-dom';
import Greeter from './src/Greeter';

console.log('main ..');
ReactDOM.render(<Greeter />, document.getElementById('root'))
console.log('main ..render...end...');
