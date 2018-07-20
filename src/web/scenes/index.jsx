
import React from 'react';
import Header from './layout/header/index.jsx';
import Footer from './layout/footer/index.jsx';
import Home from './layout/Home/index.jsx';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import logo from './../assets/img/logo/logo-2.png';
import { CSSTransitionGroup } from 'react-transition-group';



export default class App extends React.Component {

  constructor() {
    super();

  }
  render() {
    return (
      <div>
        <Header />
        <Home/>
        <Footer />
      </div>



    );
  }
}


/*  <div id="loading-wrapper">
                <img src={logo} className="position-absolute" />
                <div id="loading-text">LOADING <br/>{loader+"%"}</div>
                <div id="loading-content"></div>
            </div>
*/