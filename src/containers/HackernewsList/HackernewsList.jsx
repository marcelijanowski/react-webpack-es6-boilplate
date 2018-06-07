import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { actions } from '../../reducers/hackernews/stories/action';
import HackernewsStory from '../../components/organisms/hackernews-story/HackernewsStory';
import Loader from '../../components/atoms/loader/Loader';
import ErrorMesage from '../../components/atoms/error-message/ErrorMessage';

export class HackernewsList extends Component {
  state = {
    isLoading: false,
    items: null,
    error: null
  }
  static getDerivedStateFromProps(props, state) {
    const { hackernewsStory } = props;
    const { error, isFetching, stories } = hackernewsStory;

    if (stories) {
      return {
        items: stories,
        isLoading: false
      }
    }

    if (error) {
      return {
        error,
        isLoading: false
      }
    }
    
    return {
      isLoading: true
    }
  }
  componentDidMount() {
    const { getHackernewsStoriesRequest, type } = this.props;
    getHackernewsStoriesRequest(type);
  }

  render() {
    const { isLoading, items, error } = this.state;
    return (
      <React.Fragment>
      { isLoading &&  (<Loader text="Data is loading..."/>)}
      { error  &&  (<ErrorMesage text="There are some problems with loading stories..." />) } 
      { items &&  (
        <ul class="mdc-list hackernewslist_list">
          { items.length && items.map(item => <HackernewsStory item={item} key={item.id} />)}
        </ul>
      )}
      </React.Fragment>
    )
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
    hackernewsStory,
    routing
  }
}

function mapDispatchToProps (dispatch) {
  return {
    getHackernewsStoriesRequest: (type) => dispatch(actions.getHackernewsStoriesRequest(type))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(HackernewsList)