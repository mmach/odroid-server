/*
    ./client/components/App.jsx
*/

import React from 'react';


import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink, Row, Container, Col } from 'reactstrap';


import './../../../assets/js/helpers/hs.hamburgers.js';
import './../../../assets/js/components/hs.header.js';
import './../../../assets/js/components/hs.go-to.js';
import './../../../assets/vendor/typedjs/typed.min.js';
import './../../../assets/vendor/hs-megamenu/src/hs.megamenu.js';
import './../../../assets/js/components/hs.popup.js';
import './../../../assets/js/components/hs.dropdown.js';
import logo from './../../../assets/img/logo/logo-1.png';


import { Link } from 'react-router-dom';
class Header extends React.Component {

  constructor() {
    super();
    setTimeout(() => {
      $.HSCore.components.HSHeader.init($('#js-header'));
      $.HSCore.helpers.HSHamburgers.init('.hamburger');

      // Initialization of HSMegaMenu plugin
      $('.js-mega-menu').HSMegaMenu({
        event: 'hover',
        pageContainer: $('.container'),
        breakpoint: 991
      });
      $.HSCore.components.HSDropdown.init($('[data-dropdown-target]'), {

      });
      // Initialization of masonry.js

      $.HSCore.components.HSGoTo.init('.js-go-to');
    }, 1000);

  }

  setLanguageHandler(event) {
    localStorage.setItem('lang', event.target.getAttribute('data-tag'));
    this.props.setLanguage(event.target.getAttribute('data-tag'));

    //window.location.reload();
  }



  render() {

    return (
      <header id="js-header" className="u-header u-header--static u-header--toggle"
        data-header-fix-moment="500"
        data-header-fix-effect="slide">
        <div className="u-header__section u-header__section--hidden u-header__section--dark g-bg-black g-transition-0_3 g-py-10">
          <Container>
            <Row className=" flex-column flex-sm-row justify-content-between align-items-center text-uppercase g-font-weight-600 g-color-white g-font-size-12 g-mx-0--lg">
              <Col xs="auto" >
                <ul className="list-inline g-overflow-hidden g-pt-1 g-mx-minus-4 mb-0">

                </ul>
              </Col>
              <Col xs="auto" >
                <Col xs="auto" className=" g-pos-rel g-pb-10 g-pb-0--sm">
                  <ul className="list-inline g-overflow-hidden g-pt-1 g-mx-minus-4 mb-0">
                    <li className="list-inline-item g-mx-4">
                      <i className="icon-globe-alt g-font-size-18 g-valign-middle g-color-primary g-pos-rel g-top-minus-2 g-mr-10"></i>

                      <span href="#" id="languages-dropdown-invoker-2" className="pointer g-color-white g-color-primary--hover g-text-underline--none--hover" aria-controls="languages-dropdown-2" aria-haspopup="true" aria-expanded="false" data-dropdown-event="click" data-dropdown-target="#languages-dropdown-2" data-dropdown-type="css-animation" data-dropdown-duration="300" data-dropdown-hide-on-scroll="false" data-dropdown-animation-in="fadeIn" data-dropdown-animation-out="fadeOut">
                        {this.language}
                      </span>

                    </li>
                    <li className="list-inline-item g-mx-4">|</li>
                    <li className="list-inline-item g-mx-4"><Link  to="/" className="g-color-white g-color-primary--hover g-text-underline--none--hover" href="#">List of devices</Link></li>
               
                    <li className="list-inline-item g-mx-4">|</li>
                    <li className="list-inline-item g-mx-4"><Link  to="/map" className="g-color-white g-color-primary--hover g-text-underline--none--hover" href="#">Map device</Link></li>
                  </ul>
                </Col>

              </Col>
            </Row>
          </Container>
        </div>
      </header>);
  }
}



export default Header