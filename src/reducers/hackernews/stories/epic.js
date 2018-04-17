import { ofType } from 'redux-observable';
import { combineEpics } from 'redux-observable';
import 'rxjs/add/observable/from';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/takeUntil';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

import { 
  get as getHackernewsStoriesService
} from '../../../service/hackernews/hackernews-service';

import { type, actions } from './action';

const getHackernewsStoryEpic = action$ => 
  action$.ofType(type.GET_HACKERNEWS_STORIES_REQUEST)
         .switchMap(action =>  Observable.from(getHackernewsStoriesService()))
         .map(result => actions.getHackernewsStoriesRequestSuccess(result))
         .takeUntil(action$.ofType(type.GET_BRANDS_REQUEST_CANCEL))
         .catch((error) => actions.getHackernewsStoriesRequestFailure(error));

export default combineEpics(
  getHackernewsStoryEpic
);