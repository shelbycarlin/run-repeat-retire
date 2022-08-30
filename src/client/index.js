import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import store from './Store';
import '../styles/RootStyles.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import App from './containers/App.jsx';
import SignUp from './components/SignUp.jsx';
import Home from './containers/Home.jsx';
import AddShoeContainer from './containers/AddShoeContainer.jsx';
import RetiredShoes from './containers/RetiredShoes.jsx';
import Settings from './containers/Settings.jsx';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <StrictMode>
  <Provider store={store} >
    {/* <div className='rootStyle'>
      <App />
    </div> */}
    <BrowserRouter>
      <Routes>
        <Route exact path='/signup' element={<SignUp />} />
        <Route path='/' element={<App />}>
          {/* if app breaks for addshoe path change back to addShoe */}
          <Route path='/addshoe' element={<AddShoeContainer />} />
          <Route path='/retiredshoes' element={<RetiredShoes />} />
          <Route path='/settings' element={<Settings />} />
          <Route path='/' element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </Provider>
  // </StrictMode>
);