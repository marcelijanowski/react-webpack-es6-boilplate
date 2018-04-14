import { ofType } from 'redux-observable';
import { combineEpics } from 'redux-observable';
import { Observable } from 'rxjs/Rx'
import 'rxjs/add/operator/catch';

import { 
  get as getHackernewsStoriesService
} from '../../../service/hackernews/hackernews-service';

import { type, actions } from './actions';

const getHackernewsStoryEpic = action$ => 
  action$.ofType(type.GET_HACKERNEWS_STORIES_REQUEST)
         .switchMap(action =>  Observable.from(getHackernewsStoriesService()))
         .map(result => actions.getHackernewsStoriesRequestSuccess(result))
         .takeUntil(action$.ofType(state.GET_BRANDS_REQUEST_CANCEL))
         .catch((error) => actions.getHackernewsStoriesRequestFailure(error));

export default combineEpics(
  getHackernewsStoryEpic
);