import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getTranslations } from '../../redux/selectors/translations';
import { Link } from 'react-router-dom';
import Request from '../../components/Request/';
import './Features.css';

//Img and Icons
import FrictionIcon from '../../lib/icons/frictionless.svg';
import IntuitiveIcon from '../../lib/icons/intuitive.svg';
import VarietyIcon from '../../lib/icons/variety.svg';
import ManageIcon from '../../lib/icons/gears.svg';


class Features extends Component {
  render() {
    const { t } = this.props;

    return (
      <div>
        <section className="intro intro-features">
          <div className="container">
            <div className="row">
              <div className="col-sm-12">
                <div className="intro-block center-section">
                  <h1>{t.features.intro.title}</h1>
                  <h3>{t.features.intro.subtitle}</h3>
                  <Link className="btn blue" to='/contact'>{t.button.demo}</Link>
                  <ul className="intro-list">
                    <li className="intro-list-item">
                      <div className="intro-list-item-icon blue"><img alt="" src={FrictionIcon}/></div>
                      <div className="intro-list-item-title">Effortless</div>
                      <div className="intro-list-item-subtitle">Beats traditional apps. Just order and pay.</div>
                    </li>
                    <li className="intro-list-item">
                      <div className="intro-list-item-icon green"><img alt="" src={IntuitiveIcon}/></div>
                      <div className="intro-list-item-title">Intuitive</div>
                      <div className="intro-list-item-subtitle">Nothing easier to use than a conversational interface.</div>
                    </li>
                    <li className="intro-list-item">
                      <div className="intro-list-item-icon red"><img alt="" src={VarietyIcon}/></div>
                      <div className="intro-list-item-title">Adaptable</div>
                      <div className="intro-list-item-subtitle">Sell wide variety of products</div>
                    </li>
                    <li className="intro-list-item">
                      <div className="intro-list-item-icon orange"><img alt="" src={ManageIcon}/></div>
                      <div className="intro-list-item-title">Easy to Manage</div>
                      <div className="intro-list-item-subtitle">Prepare, dispatch and deliver orders</div>
                    </li>
                  </ul>
                  <section className="features-overview">
                    <h2>What we provide</h2>
                    <div className="row">
                      <div className="col-sm-6">
                        <div className="card-header">For your Customers</div>
                        <div className="card">
                          <div className="card-icon"></div>
                          <div className="card-title">Chatbot</div>
                          <div className="card-subtitle">Put your point-of-service in the hands of your customers.</div>
                        </div>
                      </div>
                      <div className="col-sm-6">
                      <div className="card-header">For your Concessions and Runners</div>
                        <div className="card">
                          <div className="card-icon"></div>
                          <div className="card-title">Order Manager App</div>
                          <div className="card-subtitle">Track, manage, dispatch and deliver orders from our mobile app.</div>
                        </div>
                      </div>
                    </div>
                  </section>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className="container">

        </div>
        <div className="container">
          <section id="#frictionless">
            <div className="row flex">
              <div className="col-sm-7">
                <div className="img-icon blue">
                  <img alt="" />
                </div>
                <h2>Lightning Fast Ordering</h2>
                <p>Ordering from your seat shouldn't be more complicated than ordering directly from a concession. In under 30 seconds, fans can easily order and have their payment processed.</p>
              </div>
              <div className="col-sm-5">
                <div className="img-wrapper hidden-xs">
                </div>
              </div>
            </div>
          </section>
        </div>
        <Request />
      </div>
    );
  }
}

const mapState = state => ({
  t: getTranslations(state),
});

export default connect(mapState)(Features);
