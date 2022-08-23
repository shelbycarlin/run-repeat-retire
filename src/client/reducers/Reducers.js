import { combineReducers } from '@reduxjs/toolkit';
import UserReducer from './UserReducer';

const reducer = combineReducers({
  user: UserReducer,
});

export default reducer;