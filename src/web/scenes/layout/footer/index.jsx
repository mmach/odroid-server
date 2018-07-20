/*
    ./client/components/App.jsx
*/

import React from 'react';

export default class Footer extends React.Component {

  constructor() {
    super();
   
  }
  render() {
    return (

     <footer className="text-center">
        <div className="g-color-white g-bg-primary-dark g-py-40 g-px-15">
          <a className="d-inline-block g-mb-30" href="/">
            <img className="img-fluid g-width-130" src="assets/img/logo-light.png" alt="Image description"/>
          </a>
          <p className="g-color-white-opacity-0_7 g-mb-30">Integer accumsan maximus leo, et consectetur metus vestibulum in. Vestibulum viverra justo odio maximus efficitur</p>
          <ul className="list-inline d-inline-block g-mb-30">
            <li className="list-inline-item g-mr-10">
              <a className="u-icon-v3 g-width-35 g-height-35 g-font-size-16 g-color-primary g-color-white--hover g-bg-white g-bg-gray-dark-v2--hover g-transition-0_2 g-transition--ease-in" href="#"><i className="fa fa-twitter"></i></a>
            </li>
            <li className="list-inline-item g-mr-10">
              <a className="u-icon-v3 g-width-35 g-height-35 g-font-size-16 g-color-primary g-color-white--hover g-bg-white g-bg-gray-dark-v2--hover g-transition-0_2 g-transition--ease-in" href="#"><i className="fa fa-pinterest"></i></a>
            </li>
            <li className="list-inline-item g-mr-10">
              <a className="u-icon-v3 g-width-35 g-height-35 g-font-size-16 g-color-primary g-color-white--hover g-bg-white g-bg-gray-dark-v2--hover g-transition-0_2 g-transition--ease-in" href="#"><i className="fa fa-facebook"></i></a>
            </li>
            <li className="list-inline-item">
              <a className="u-icon-v3 g-width-35 g-height-35 g-font-size-16 g-color-primary g-color-white--hover g-bg-white g-bg-gray-dark-v2--hover g-transition-0_2 g-transition--ease-in" href="#"><i className="fa fa-linkedin"></i></a>
            </li>
          </ul>
          <ul className="list-inline text-uppercase g-font-weight-600 g-font-size-11 mb-0">
            <li className="list-inline-item g-px-12--md">
              <a className="g-color-white-opacity-0_7 g-color-white--hover g-text-underline--none--hover" href="#">About</a>
            </li>
            <li className="list-inline-item g-px-12--md">
              <a className="g-color-white-opacity-0_7 g-color-white--hover g-text-underline--none--hover" href="#">Why we</a>
            </li>
            <li className="list-inline-item g-px-12--md">
              <a className="g-color-white-opacity-0_7 g-color-white--hover g-text-underline--none--hover" href="#">Services</a>
            </li>
            <li className="list-inline-item g-px-12--md">
              <a className="g-color-white-opacity-0_7 g-color-white--hover g-text-underline--none--hover" href="#">Work process</a>
            </li>
            <li className="list-inline-item g-px-12--md">
              <a className="g-color-white-opacity-0_7 g-color-white--hover g-text-underline--none--hover" href="#">Skills</a>
            </li>
            <li className="list-inline-item g-px-12--md">
              <a className="g-color-white-opacity-0_7 g-color-white--hover g-text-underline--none--hover" href="#">Team</a>
            </li>
            <li className="list-inline-item g-px-12--md">
              <a className="g-color-white-opacity-0_7 g-color-white--hover g-text-underline--none--hover" href="#">Testimonials</a>
            </li>
            <li className="list-inline-item g-px-12--md">
              <a className="g-color-white-opacity-0_7 g-color-white--hover g-text-underline--none--hover" href="#">Contact</a>
            </li>
          </ul>
        </div>
      </footer>
    

      );
  }
}
