//import the configurestore method from redux
import { applyMiddleware, compose, configureStore} from '@reduxjs/toolkit';
//import thunk from 'redux-thunk'
//we want to import the combined reducers here
import reducer from './reducers/Reducers.js';

//declare store passing in reducers 
// const store = () => {
//   return configureStore(
//     reducers,
//     compose(applyMiddleware(thunk))
//   )
// }
const store = configureStore({
  reducer,
})
export default store;