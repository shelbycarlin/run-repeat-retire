import React from 'react';
import AddShoe from '../components/AddShoe.jsx';
import { useSelector } from 'react-redux';

//need to pass down the username as a prop
const AddShoeContainer = () =>{
  const { username } = useSelector((state) => state.user.profile)
  return(
    <div className='addShoeContainer'>
      <AddShoe username={username}/>
    </div>
  )

}
export default AddShoeContainer