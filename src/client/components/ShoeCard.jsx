import React from 'react';
import '../../styles/ShoeCard.scss';
import LifeLeftBar from './LifeLeftBar.jsx';
import MilePopUp from './MilePopUp.jsx';

// 'Tempo',
// 'Recovery',
// 'Road Race',
// 'Trail',
//do we want to add the onclick function built into the shoe card  
const ShoeCard = (props) => {
  // const head = '';
  // if(props.shoeType === 'Daily') {
  //   head = 'Daily Trainer Shoes';
  // }else if(props.shoeType === 'Tempo' || 'Recovery' || 'Road Race'|| 'Trail'){
  //   head = props.shoeType + ' Shoes'
  // }else{
  //   head = props.shoeType
  // }
  // console.log(props.lifeLeft)
  // console.log(props.shoeId)
  //we want to create a reuable componet where we can put in and render the different shoes in a persons rotation or archive
  const popUpHandler = (shoeId) => {
    //we need to dispatch an action here!
    //onclick of the div we want to dispatch an action for popup status passing the action payload true
    //for the close button we want to have to dispatch an action to set the state of the pop up to the payload false 
    //we also want to have the plus miles button to dispatch an action to add miles to the state and have the pop up reflect the changes 
    //same for minu we want to dispatch an action to update the state and have those rerendered on state change
    //on save button we want to dispatch an action to update the state for miles and we want to also set the state for the popup to false, we also want this to rerender on the page 

    
console.log(shoeId);

  }
  return (
    <div className='shoeCard' key={props.shoeId} id={'shoe' + props.shoeId} onClick={()=> popUpHandler(props)}>
      <h2>{props.shoeTitle}</h2>
      <label>Model: <span>{props.model}</span></label>
      <label>Brand: <span>{props.brand}</span> </label>
      <label>Type: <span>{props.shoeType}</span></label>
      <label>Miles: <span>{props.miles}</span></label>
      <label>Life Left:
        <div className='llStyle'>
          <LifeLeftBar lifeLeft={props.lifeLeft} />
        </div>
      </label>
      <MilePopUp trigger={true}>
      </MilePopUp>
    </div>
  )
}
export default ShoeCard;