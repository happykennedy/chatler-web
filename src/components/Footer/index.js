import React, { Component } from 'react';
import "./Footer.css";
import Logo from '../../lib/img/logo.svg';

class Footer extends Component {
  render() {
    return (
      <div>
        <footer>
          <div className="container">
            <div className="row">
              <div className="col-sm-6 col-xs-12">
                <div className="brand">
                  <a href="/">
                    <img src={Logo} alt="" />
                    Chatler
                  </a>
                </div>
                <ul className="footer-list">
                  <li>contact@jeeves.com</li>
                  <li>Montreal, QC, Canada</li>
                </ul>
              </div>
              <div className="col-sm-2 col-xs-6">
                <ul className="footer-list">
                  <li className="footer-list-title">Pages</li>
                  <li><a href="/about">Home</a></li>
                  <li><a href="/partners">Features</a></li>
                  <li><a href="/contact">Company</a></li>
                  <li><a href="/demo">Contact Us</a></li>
                </ul>
              </div>
              <div className="col-sm-2 col-xs-6">
                <ul className="footer-list">
                  <li className="footer-list-title">SOCIAL</li>
                  <li>
                    <a href="/partners">
                      Facebook
                    </a>
                  </li>
                  <li>
                    <a href="/partners">
                      LinkedIn
                    </a>
                  </li>
                </ul>
              </div>
              <div className="col-sm-2 col-xs-12">
                <ul className="footer-list">
                  <li className="footer-list-title">Language</li>
                  <li><a href="/partners">English</a></li>
                  <li><a href="/about">Français</a></li>
                </ul>
              </div>
            </div>
            <div className="divider"></div>
            <div className="row">
              <div className="col-sm-12">
                <div className="copyright">&copy; Chatler 2018</div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    );
  }
}

export default Footer;
