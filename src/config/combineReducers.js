import { combineReducers } from 'redux';
import { i18nState } from 'redux-i18n';

import rootReducer from '../reducers/reducer';

const reducers = combineReducers({
  rootReducer,
  i18nState
});

export default reducers;
