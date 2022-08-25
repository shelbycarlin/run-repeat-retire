import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { logOut } from '../actions/actions';

const NavBar = () => {
  const dispatch = useDispatch();

  const handleLogOut = () => {
    dispatch(logOut)
  };

  return (
    <nav>
      <Link to='/'>Home</Link>
      <Link to='/addshoe'>Add Shoe</Link>
      {/* <Link>Retired Shoes</Link>
     <Link>Settings</Link> */}
      <button onClick={handleLogOut}>LogOut</button>
    </nav>
  )
}

export default NavBar;