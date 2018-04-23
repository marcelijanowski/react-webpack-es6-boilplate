import { ofType } from 'redux-observable';
import { combineEpics } from 'redux-observable';
import 'rxjs/add/operator/takeUntil';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { mergeMap } from 'rxjs/add/operator/mergeMap';
import { concatMap } from 'rxjs/add/operator/concatMap';
import { from } from 'rxjs/observable/from';
import { of } from 'rxjs/observable/of';

import { 
  getTopStories
} from '../../../utils/service-helper';

import { type, actions } from './action';

export const getHackernewsStoryEpic = (action$, store) => 
  action$.ofType(type.GET_HACKERNEWS_STORIES_REQUEST)
          .mergeMap(
            action =>  {
              return from(getTopStories())
                      .concatMap(result => of(actions.getHackernewsStoriesRequestSuccess(result)))
                      .takeUntil(action$.ofType(type.GET_HACKERNEWS_STORIES_REQUEST_CANCEL))
                      .catch((error) => of(actions.getHackernewsStoriesRequestFailure(error.message)))
            }
        );

export default combineEpics(
  getHackernewsStoryEpic
);