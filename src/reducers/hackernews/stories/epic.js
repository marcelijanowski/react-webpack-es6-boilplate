import { ofType } from 'redux-observable';
import { combineEpics } from 'redux-observable';
import 'rxjs/add/operator/takeUntil';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { switchMap } from 'rxjs/add/operator/switchMap';
import { from } from 'rxjs/observable/from';
import { of } from 'rxjs/observable/of';

import { 
  getTopStories
} from '../../../utils/service-helper';

import { type, actions } from './action';

export const getHackernewsStoryEpic = action$ => 
  action$.ofType(type.GET_HACKERNEWS_STORIES_REQUEST)
          .switchMap(
            action =>  from(getTopStories())
                        .takeUntil(action$.ofType(type.GET_HACKERNEWS_STORIES_REQUEST_CANCEL))
                        .map(result => actions.getHackernewsStoriesRequestSuccess(result))
                        .catch((error) => actions.getBrandsRequestFailure(error))
        );

export default combineEpics(
  getHackernewsStoryEpic
);