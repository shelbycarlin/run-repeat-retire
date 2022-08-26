import React from 'react';
import '../../styles/ShoeCard.scss';
import LifeLeftBar from './LifeLeftBar.jsx';

// 'Tempo',
// 'Recovery',
// 'Road Race',
// 'Trail',
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
  return (
    <div className='shoeCard' key={props.shoeId} id={'shoe' + props.shoeId}>
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
    </div>
  )
}
export default ShoeCard;