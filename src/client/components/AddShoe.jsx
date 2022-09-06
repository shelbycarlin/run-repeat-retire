/* eslint-disable react/prop-types */
import React, { useRef } from 'react';
import InputField from './InputField.jsx';
import { useDispatch } from 'react-redux';

const AddShoe = (props) => {
  const titleRef = useRef(null)
  const modelRef = useRef(null)
  const brandRef = useRef(null)
  const typeRef = useRef(null)
  const dispatch = useDispatch();
  
  const handleAddShoe = () =>{
    fetch(`/api/addshoe/${props.username}`,{
      method:'POST',
      headers: {
        'Content-Type': 'application/JSON',
      },
      body: JSON.stringify({
        shoe_title: titleRef.current.value,
        model: modelRef.current.value,
        brand: brandRef.current.value,
        shoe_type: typeRef.current.value
      })
    })
      .then(res => {
        return res.json()
      })
      .then(res => {
        dispatch()
      })
      .then(res => {
        if(res === 'Success') {
          window.alert('Shoe Sucessfully Added To Rotation')
        }
      })
  }
    
     
  
  return(
    <div className='addShoe'>
      <h2>Add Shoe To Rotation</h2>
      <div className='inputAddContainer'>
        <InputField id='title' label='Title: ' ref={titleRef} />
        <InputField id='model' label='Model: ' ref={modelRef} />
        <InputField id='brand' label='Brand: ' ref={brandRef} />
        <label htmlFor="type">Shoe Type: </label>
        <select className='select-type' name='type' id='type' defaultValue='Shoe Type' ref={typeRef}>
          <option value="Daily">Daily Trainer</option>
          <option value="Road Race">Road Race</option>
          <option value="Tempo">Tempo</option>
          <option value="Recovery">Recovery</option>
          <option value="Trail">Trail</option>
          <option value="Track Spikes">Track Spikes</option>
          <option value="X Country Spikes">X Country Spikes</option> 
        </select>
        <button onClick={handleAddShoe}>Add Shoe To Rotation</button>
      </div>
    </div>
  )
}
export default AddShoe;