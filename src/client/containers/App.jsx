import React from 'react';
import { useSelector } from 'react-redux';
import '../../styles/App.scss';

//we want to test if the state says you are logged in here and if true then return the navbar and homepage 
import Login from '../components/Login.jsx';
import NavBar from '../components/NavBar.jsx';
import Header from '../components/Header.jsx';
import { Outlet } from 'react-router-dom';
//import Home from './Home.jsx';
//else return the login page


const App = () => {
  //declare loginStatus and get the state here for loggin in to check if its truthy or not and to pass over to the home page
  const loginStatus = useSelector((state) => state.loginStatus);

  //if logged in returns truthy then we want to return the NavBar and Outlet?
  if(loginStatus) {
    return (
      <div>
        <Header />
        <NavBar />
        <Outlet />
      </div>
    )
  }else{
    return(
      <div className='app'> 
        <Login />
      </div>
    )
  }

  //then we have an if statement of if loggedin equal true then we will return the navBar and HomePage Components 
  //else we will return the logIn component 
}

export default App;
