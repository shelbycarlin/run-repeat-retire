//import the configurestore method from redux
//applyMiddleware, compose,
import { configureStore } from '@reduxjs/toolkit';
//import thunk from 'redux-thunk'
//we want to import the combined reducers here
// import storage from 'redux-persist/lib/storage';
// import { persistReducer, persistStore } from 'redux-persist';
// import thunk from 'redux-thunk';
//import UserReducer from './reducers/UserReducer'
import reducer from './reducers/Reducers.js';

// const persistConfig = {
//   key: 'root',
//   storage,
// }
// const persistedReducer = persistReducer(persistConfig, UserReducer)
// export const store = configureStore({
//   reducer: persistedReducer,
//   devTools: process.env.NODE_ENV !== 'production',
//   middleware: [thunk]
// })

// export const persistor = persistStore(store)
const store = configureStore({
  reducer,

})
export default store;