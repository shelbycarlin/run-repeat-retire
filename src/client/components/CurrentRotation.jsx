/* eslint-disable react/prop-types */
import React from 'react';
import ShoeCard from './ShoeCard.jsx'
import '../../styles/CurrentRotation.scss'
// model
//brand
//type
//miles
//lifeLeft
      

const CurrentRotation = (props) => {
//declare currentRotation from props
  const currentRotation = props.currentRotation
  //declare a rotation array to push the html elements onto 
  const rotationArray = [];
  //for each object key from the currentRotation object
  Object.keys(currentRotation).forEach(id =>{
    //declare shoeObj for each key
    const shoeObj = currentRotation[id];
    console.log(shoeObj)
    rotationArray.push(<ShoeCard key={id} shoeId={id} shoeTitle={shoeObj.shoeTitle} model={shoeObj.model} brand={shoeObj.brand} shoeType={shoeObj.shoeType} miles={shoeObj.miles} lifeLeft={shoeObj.lifeLeft}/>)

  })

  return(
    <div className='currentRotationContainer'>
      <h1>Current Rotation</h1>
      <div className='rotationArrayContainer'>
        {rotationArray}
      </div>
    </div>
  )
}
export default CurrentRotation;