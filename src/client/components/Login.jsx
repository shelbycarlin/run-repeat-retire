import  React, { useRef } from 'react';
import { useDispatch } from 'react-redux';
import {Link, useNavigate } from 'react-router-dom';
import Logo from '../../../public/Logo.png';
import InputField from './InputField.jsx'
import '../../styles/Login.scss'
import { login } from '../actions/actions';

//we need to have a login function that takes in props and we need to use redux to update the state and return elements for react
const Login = () => {
  // declare usernameRef fassign to useRef(null)
  const usernameRef = useRef(null);
  // //declare passwordRef assign to useRef(null)
  const passwordRef = useRef(null);

  //decalre dispatch and assign to the useDispatch invocations 
  const dispatch = useDispatch();
  //declare navigate and assign to the useNavitgate invocation
  const navigate = useNavigate();

  // //we want a handlesubmit functionality 
  const handleSubmit = () => {
    //we want a fetch to /api/login path way 
    fetch('/api/login', {
      //this will be a post request 
      method:'POST',
      //header type is app/json
      headers: {
        'Content-Type': 'application/JSON',
      },
      //body we want to json stringify and pass the username and password in the req body 
      body: JSON.stringify({
        username: usernameRef.current.value,
        password: passwordRef.current.value,
      })
    })
    //we want to promise chain to take the resposne and json it 
      .then((res) => {
        //console.log(res)
        return res.json()
      })
      //then we want to check if the response was the correct login credentials
      .then(async (res) => {
        if (res === 'Username or Password Incorrect') {
          //we want a window alert if we get negative feedback from the back end
          window.alert('Username or Password Incorrect')
        } else {
          //response = user:{}, currentRotation:[]
          //deconstruct the response
          const { user, current_Rotation } = await res;
          console.log(res)

          const currentRotation = {};

          current_Rotation.forEach((element) => {
          //we want to destructure all the properties from current rotataion element
            const { shoe_id, shoe_title, model, brand, shoe_type, miles, life_left, shoe_status } = element
            currentRotation[shoe_id] = {shoeTitle:shoe_title, model:model, brand:brand, shoeType:shoe_type, miles:miles, lifeLeft:life_left, shoeStatus:shoe_status}
          } )
          console.log(currentRotation);
          dispatch(login(usernameRef.current.value, user.firstName, user.lastName,  user.email, currentRotation))
          navigate('../', {replace: true});
        }
      })

  }

  return (
    <div className='loginPage'>
      <div className='logoContainer'>
        <img src={ Logo } alt="logo"/> 
        <h1>Run, <br />Repeat, <br />Retire</h1>
      </div>
      <div className='inputs'>
        <h2>Welcome Login Here</h2>
        <InputField id='username' label='Username: ' ref={usernameRef}/>
        <InputField id='password' label='Password: ' inputType='password' ref={passwordRef} />
      
        <div>
          <button onClick={handleSubmit}>Login</button>
        </div>
        <div className='needAcc'>
          <Link to='/signup' className='create-account'>Create an Account Here</Link>
        </div>
      </div>
    </div>
  )



}
export default Login