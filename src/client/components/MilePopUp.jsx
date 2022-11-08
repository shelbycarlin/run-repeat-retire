import React from 'react';
import LifeLeftBar from './LifeLeftBar.jsx';
import ShoeCard from './ShoeCard.jsx';
import '../../styles/MilesPopUp.scss'

//what do we want the pop up to display maybe the title of the shoe the current milage and the add button the sub button and close button 

const MilePopUp = (props) => {
  //const shoeId = props.shoeId
  return(props.trigger) ? (
    <div className='popup'>
      <div className='popupinner'>
        <h1>{props.shoeTitle}</h1>
        <h2>Miles Run</h2>
        <span>{props.miles}</span>   
      <button className='addBut'>+ Miles</button>
      <button className='subBut'>- Miles</button>
      <button className='closeBut'>Close</button>
      <button className='saveBut'>Save</button>
      </div>
    </div>
  ) : '';

}
export default MilePopUp