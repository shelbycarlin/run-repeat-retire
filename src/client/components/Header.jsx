import React from 'react';
import Logo from '../../../public/Logo.png'

const Header = () => {
 
  return (
    <div className='headerContainer'>
      <img src={ Logo } alt="logo"/> 
      <h1>Run, <br />Repeat, <br />Retire</h1>
    </div>
  )
}

export default Header;