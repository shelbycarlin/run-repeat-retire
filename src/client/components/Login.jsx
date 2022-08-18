import  React, { useRef } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Logo from '../../../public/My project.png';
import '../../styles/Login.scss'

//we need to have a login function that takes in props and we need to use redux to update the state and return elements for react
const Login = () => {
  //declare usernameRef fassign to useRef(null)
  const usernameRef = useRef(null);
  //declare passwordRef assign to useRef(null)
  const passwordRef = useRef(null);

  //decalre dispatch and assign to the useDispatch invocations 
  const dispatch = useDispatch();
  //declare navigate and assign to the useNavitgate invocation
  const navigate = useNavigate();

  //we want a handlesubmit functionality 
  const handleSubmit = () => {
    //we want a fetch to /api/login path way 
    fetch('/api/login', {
      method:'POST',
      headers: {
        'Content-Type': 'application/JSON',
      },
      body: JSON.stringify({
        username: usernameRef.current.value,
        password: passwordRef.current.value,
      })
    })
      .then((res) => {
        return res.json()
      })
      .then((res) => {
        if (res === 'unsucessful') {
          window.alert('Incorrect credentials provided')
        } else {
        //response = user:{}, currentRotation:[]
          const { user, currentRotation } = res;

          const structuredRotation = {};

          currentRotation.forEach((element) => {
          //we want to destructure all the properties from current rotataion element
            const { shoeId, } = element
            structuredRotation[shoeId]
          } )

        }
      })

  }
  //this will be a post request 
  //header type is app/json
  //body we want to json stringify and pass the username and password in the req body 

  //we want to promise chain to take the resposne and json it 
  return (
    <div className='loginPage'>
      <div className='logoContainer'>
        <h1>Run, <br />Repeat, <br />Retire</h1>
        <img src={ Logo } alt="logo" />
      </div>
      <div className='inputs'>
        <h1>Welcome Login Here</h1>
      </div>

    </div>
  )



}
export default Login