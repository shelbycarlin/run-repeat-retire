//import the configurestore method from redux
import { configureStore } from '@reduxjs/toolkit';
//we want to import the combined reducers here
import reducers from './reducers/Reducers.js';

//declare store passing in reducers 
const store = configureStore({
  reducers
})
export default store;