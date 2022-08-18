import React from 'react';
import { useSelector } from 'react-redux';
import '../../styles/App.scss';

//we want to test if the state says you are logged in here and if true then return the navbar and homepage 
//else return the login page

const App = () => {
  //declare loggedin and get the state here for loggin in
  const loggedIn = useSelector((state) => state.user.loggedIn);

  //if logged in returns truthy then we want to return the NavBar and Outlet?
  if(loggedIn) {
    return (
      
    )
  }

  //then we have an if statement of if loggedin equal true then we will return the navBar and HomePage Components 
  //else we will return the logIn component 
  return(
    <div className='helloworld'>
      <h1>Hello World</h1>
    </div>
  )
}

export default App;
