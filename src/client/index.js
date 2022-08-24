import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import store from './Store';
import '../styles/RootStyles.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import App from './containers/App.jsx';
import SignUp from './components/SignUp.jsx';
// import CurrentRotation from './containers/CurrentRotation.jsx';
// import  AddShoe from './containers/AddShoe.jsx';
// import RetiredShoes from './containers/RetiredShoes.jsx';
// import Settings from './containers/Settings.jsx';


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
          {/* <Route path='/home' element={<Home />}/> */}
          {/* <Route path='/currentRotattion' element={<CurrentRotation />}/>
            <Route path='/currentRotattion' element={<AddShoe />}/>
            <Route path='/currentRotattion' element={<RetiredShoes />}/>
            <Route path='/currentRotattion' element={<Settings />}/> */}
        </Route>
      </Routes>
    </BrowserRouter>
  </Provider>
  // </StrictMode>
);