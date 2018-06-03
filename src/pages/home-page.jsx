import React, { Component } from 'react';

import HackernewsList from '../containers/HackernewsList/HackernewsList';
import "./home-page.scss";

class HomePage extends Component {
  render() {
    return (
      <div className="mdc-layout-grid">
          <div className="mdc-layout-grid__cell">
          <header className="mdc-toolbar">
            <div className="mdc-toolbar__row">
              <section className="mdc-toolbar__section mdc-toolbar__section--align-start">
                <a href="#" className="material-icons mdc-toolbar__menu-icon">menu</a>
                <span className="mdc-toolbar__title">Hackernews demo page</span>
              </section>
            </div>
            <HackernewsList type="topStory" />
          </header>
         
        </div>
      </div>
    );
  }
}

export default HomePage;
