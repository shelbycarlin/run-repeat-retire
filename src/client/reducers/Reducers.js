import { combineReducers } from "@reduxjs/toolkit";
import UserReducer from "./UserReducer";

const reducers = combineReducers({
  user:UserReducer,
})

export default reducers;