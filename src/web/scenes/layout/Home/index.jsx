/*
    ./client/components/App.jsx
*/

import React from 'react';

import { CSSTransitionGroup } from 'react-transition-group';
import foto from './photo.jpg';

import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink, Row, Container, Col } from 'reactstrap';

import DevicesList from './../DevicesList/index.jsx'
import DeviceMap from './../DeviceMap/index.jsx'

import { BrowserRouter, Route, Switch } from 'react-router-dom';
export default class Home extends React.Component {

  constructor() {
    super();

  }
  render() {
    return (
      <section className="g-min-height-100vh g-flex-centered g-bg-cover g-bg-pos-top-center  g-bg-black-opacity-0_5--after" style={{ backgroundImage: `url(${foto})`, backgroundSize: 'cover', }}>

        <Container className=" text-center g-z-index-1 ">

          <div className="col-md-12 col-lg-12 align-self-center">
            <div className="g-bg-white g-rounded-5 g-pa-15 g-pa-30--md">
              <div className="table-responsive">
                <Switch>
                  <Route exact path={"/"} component={DevicesList} />
                  <Route path={"/map"} component={DeviceMap} />
                </Switch>
              
              </div>
            </div>
          </div>




        </Container>
      </section>
    );
  }
}
