import React from 'react';
//import ShoeCard from '../components/ShoeCard.jsx';
//import Header from '../components/Header';
//import NavBar from '../components/NavBar';
import CurrentRotation from '../components/CurrentRotation.jsx';
import { useSelector } from 'react-redux';
import '../../styles/Home.scss'


const Home = () => {
  const { currentRotation } = useSelector((state) => state.user.profile)
  console.log(currentRotation);

  return(
    <div className='homeContainer'>
      <CurrentRotation currentRotation={currentRotation}/>
    </div>
  )

}
export default Home;