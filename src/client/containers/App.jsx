import React from 'react';
//import { useSelector } from 'react-redux';
import '../../styles/App.scss';

import Login from '../components/Login.jsx';
import NavBar from '../components/NavBar.jsx';
import Header from '../components/Header.jsx';
import { Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';


const App = () => {
  //declare loginStatus and get the state here for loggin in to check if its truthy or not and to pass over to the home page
  const loginStatus = useSelector((state) => state.user.loginStatus);
  const username = useSelector((state) => state.user.username);
  
  //if logged in returns truthy then we want to return the NavBar and Outlet?
  console.log(loginStatus)
  
  //we want to test if the state says you are logged in here and if true then return the navbar and homepage 
  if(loginStatus) {
    return (
      <div className='appContainer'>
        <Header/>
        <div className='app'>
          <NavBar username={username}/>
          <Outlet />
        </div>
      </div>
    )
    //else return the login page
  }else if (!loginStatus){
    return(
      <Login />
    )
  }

  //then we have an if statement of if loggedin equal true then we will return the navBar and HomePage Components 
  //else we will return the logIn component 
}

export default App;
