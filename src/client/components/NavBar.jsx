import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from "react-redux";
import {logOut} from '../actions/actions';

const NavBar = () => {
  const dispatch = useDispatch();

  const handleLogOut = () => {
    dispatch(logOut)
  };

  return (
    <div>
      <h2>NavBar</h2>
      <Link>Home</Link>
      <Link>Retired Shoes</Link>
      <Link>Settings</Link>
      <button onClick={handleLogOut}>LogOut</button>
    </div>
  )
}

export default NavBar;