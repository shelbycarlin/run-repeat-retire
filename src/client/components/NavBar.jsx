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
    fetch(`/api/current/:${props.username}`
    )
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