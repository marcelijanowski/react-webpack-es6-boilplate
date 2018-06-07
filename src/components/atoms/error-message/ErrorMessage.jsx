import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

class ErrorMessage extends PureComponent {
  render() {
    const { text } = this.props;
    return (<div className="hackernewslist-state__loading">{text}</div>);
  }
}

ErrorMessage.propTypes = {
  text: PropTypes.string.isRequired
};


export default ErrorMessage;