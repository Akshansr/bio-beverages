import { createStore, combineReducers } from 'redux';
import beveragesMenuReducer from '../reducers/beveragesMenu';
import beveragesQueueReducer from '../reducers/beveragesQueue';

export default () => {
  const store = createStore(
    combineReducers({
      beveragesMenu: beveragesMenuReducer,
      beveragesQueue: beveragesQueueReducer
    }),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );

  return store;
};
