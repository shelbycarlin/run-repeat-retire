import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import InputField from './InputField.jsx';
import { signUp } from '../actions/actions';
import '../../styles/SignUp.scss'


const SignUp = () => {
  const firstnameRef = useRef(null);
  const lastnameRef = useRef(null);
  const emailRef = useRef(null);
  const usernameRef = useRef(null);
  const passwordRef = useRef(null);
  const confirmpasswordRef = useRef(null);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSubmit = () => {
    //we want to check to make sure passwordRef matches confirm passwordRed
    if(passwordRef.current.value !== confirmpasswordRef.current.value){
      //we want a window alert to say passwords dont match
      window.alert('Password do not match')
      //if any of the fields return false 
    }else if (!firstnameRef.current.value || !lastnameRef.current.value || !emailRef.current.value || !usernameRef.current.value || !passwordRef.current.value || !confirmpasswordRef.current.value){
      //we want a window alert that says make sure to fill out correct windows 
      window.alert('Input fields empty, make sure to fill out all input fields')
    }else{

      //then we want to do a fetch 
      fetch('/api/signup', {
      //post request to the db 
        method:'POST',
        //it a application JSON 
        headers: {
          'Content-Type': 'application/JSON',
        },
        //the body we are sending to the backend
        body: JSON.stringify({
          firstName:firstnameRef.current.value,
          lastName:lastnameRef.current.value,
          email:emailRef.current.value,
          username: usernameRef.current.value,
          password: passwordRef.current.value,
        })
      })
        .then((res) => {
        //when we get the response back we want tp JSON 
          return res.json()
        })
        .then((res) => {
        //Then we check if the res === 'Sucessful account created" 
          if (res === 'Success Account Created'){
          //we want a window alert that says sucessful account created
            window.alert('Success Account Created!')
            //then we want to dispatch the update to state and then 
            dispatch(signUp(usernameRef.current.value, firstnameRef.current.value, lastnameRef.current.value, emailRef.current.value));
            //we want to navigate to the login page
            navigate('../', {replace:true});
          //else if res === 'account exist with email' is not that string 
          }else if(res === 'Unsuccessful Email'){
          //then we want a window alert that says account already exist with email 
            window.alert('Account already exist with this email')
          }else if (res === 'Unsuccessful Username'){
          //else then we want a window alert that says username taken
            window.alert('Username Taken try again')
          }
        })
        .catch((err) => console.log(err))
      //we want a .catch and console.log(err)
    }
  }


  return(
    <div className='signUpContainer'>
      <h1>Create an Account</h1>
      <InputField id='firstname' label='First Name: ' ref={firstnameRef} />
      <InputField id='lastname' label='Last Name: ' ref={lastnameRef} />
      <InputField id='email' label='Email: ' ref={emailRef} />
      <InputField id='username' label='Username: ' ref={usernameRef} />
      <InputField id='password' label='Password: ' inputType='password' ref={passwordRef} />
      <InputField id='confirmpassword' label='Confirm Password: ' inputType='password' ref={confirmpasswordRef} />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  )
}
export default SignUp;