/* 
    ./client/index.js
*/

import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
window.jQuery = $;
import './assets/vendor/bootstrap/bootstrap.js';
import './assets/js/custom.js';
import './assets/js/hs.core.js';


import App from './scenes/index.jsx';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import logo from './assets/img/logo/logo-1.png';

console.log(App);


ReactDOM.render(<BrowserRouter>

    <Route path={"/"} component={App} >
    </Route>

</BrowserRouter>

    , document.getElementById('root'));
