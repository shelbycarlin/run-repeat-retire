import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { logOut } from '../actions/actions';
import '../../styles/NavBar.scss'
const NavBar = (props) => {
  const dispatch = useDispatch();

  const handleLogOut = () => {
    dispatch(logOut)
  };
  const handleHome = () => {
    //make GET Request so that on click you get the most recent results of the current shoe rotation
    fetch(`/api/current/:${props.username}`,{
      method:'GET',
      headers:{
        'Content-Type':'application/json'
      }
    })
      .then(res => {
        return res.json()
      })
      .then( async (res) => {
      //then we need to take the res dispatch and set it to be the currentrotation for the state 
        const { current_rotation } = res;
        //we need to implement the for each method to be able to parse the res into a manner that is readable for the card to put in 

        dispatch(login())

      })
  } 

  return (
    <nav>
      <Link to='/' onClick={handleHome}>Home</Link>
      <Link to='/addshoe'>Add Shoe</Link>
      <Link to='/retiredshoes'>Retired Shoes</Link>
      <Link to='/settings'>Settings</Link>
      <button onClick={handleLogOut}>LogOut</button>
    </nav>
  )
}

export default NavBar;