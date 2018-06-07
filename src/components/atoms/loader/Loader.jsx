import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

class Loader extends PureComponent {
  render() {
    const { text } = this.props;
    return (<div className="hackernewslist-state__loading">{text}</div>);
  }
}

Loader.propTypes = {
  text: PropTypes.string.isRequired
};


export default Loader;