import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { getHackernewsStoriesRequest } from '../../reducers/hackernews/stories/action';

export class HackernewsList extends Component {
  state = {
    isLoading: false,
    items: null
  }
  componentDidMount() {
    const { getHackernewsStoriesRequest, type } = this.props;
    getHackernewsStoriesRequest(type);
  }

  render() {
    return (
      <div></div>
    );
  }
}

HackernewsList.defaultProps = {
  type: 'topStory'
};

HackernewsList.propTypes = {
  type: PropTypes.string
};

function mapStateToProps ( state ) {
  const { hackernewsStory, routing } = state;

  return {
    hackernewsStory: hackernewsStory,
    routing: routing
  }
}

function mapDispatchToProps (dispatch) {
  return {
    getHackernewsStoriesRequest: (type) => dispatch(actions.getHackernewsStoriesRequest(type))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(HackernewsList)