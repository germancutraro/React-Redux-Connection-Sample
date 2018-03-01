import { combineReducers } from 'redux';

import { userReducer } from './reducer-users';
import { userActiveReducer } from './reducer-active-user';

const reducer = combineReducers({
  users: userReducer,
  activeUser: userActiveReducer
});

export { reducer }