import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import './HackernewsStory.scss';

class HackerNewsStory extends PureComponent {
  render() {
    const { item } = this.props;
    return (
      <li class="mdc-list-item">
        <span class="mdc-list-item__text">
          {item.id}
          <span class="mdc-list-item__secondary-text">
            Second-line text
          </span>
        </span>
      </li>
    );
  }
}

HackerNewsStory.propTypes = {
  item: PropTypes.object.isRequired
}

export default HackerNewsStory;
