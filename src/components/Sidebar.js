import React from 'react';

import logo from './../assets/logo.png';
import Navbar from "./Navbar";


const Sidebar = () => {

  return (
    <section id="side-nav" className="l-bg-color is-fixed">
          <header id="header u-center">
            <div className="logo u-center-text u-margin-top-small">
              <img className="logo--width" src={logo} alt="brand-logo" />
            </div>
          </header>
          <Navbar />

          <section id="contacts" className="u-center">
            <div className="contacts-info u-center-text u-margin-top-small">
              <p className="contact--text ">Let's talk</p>
              <p className="contact--email">
                <a href="mailto:itolimaesther@gmail.com">itolimaesther@gmail.com</a>
              </p>
            </div>
            <div className="contacts-links u-margin-top-medium">
              <ul className="contacts--list d-flex u-center">
                <li className="social--item">
                  <a href="https://github.com/itolimaesther"><i className="fa fa-github icon-bg" /></a>
                </li>
                <li className="social--item">
                  <a href="https://www.linkedin.com/in/itolimaesther/"><i className="fa fa-linkedin icon-bg" /></a>
                </li>
                <li className="social--item">
                  <a href="https://twitter.com/Ur_melanin_dev"><i className="fa fa-twitter icon-bg" /></a>
                </li>
              </ul>
            </div>
          </section>
        </section>
        
  )
}

export default Sidebar;
