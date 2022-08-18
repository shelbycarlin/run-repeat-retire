//import all as types from action types 
//reducers return an entirely new object to replace portions of the intial state
import { SIGNUP_SUCCESS, LOGIN_SUCCESS, LOGOUT_SUCCESS } from '../constants/Types.js';

//we want to declare the intial state
const intialState = {
  //each property that goes into intialState is considered a "slice" of the store 
  loggedin: false,
  username: '',
  firstName: '',
  lastName: '',
  email: '',
  currentRotation: {},
  retiredShoes: {},

  addShoeTypeToggle: false,
  addShoeId: '',
  addShoeModel: '',
  addShoeBrand: '',
  addShoeType: '',
  addShoeMiles: '',
  addShoePercentage: '',
  //addShoeImg:'',
};

const UserReducer = (state = intialState, action) => {
  switch (action.type) {
  case LOGIN_SUCCESS: {
    const { username, firstName, lastName, email, currentRotation } = action.payload;

    return {
      ...state,
      loggedin:true,
      username,
      firstName,
      lastName,
      email,
      currentRotation
    };
  }
  case SIGNUP_SUCCESS: {
    const { username, firstName, lastName, email } = action.payload;

    return{
      ...state,
      username,
      firstName,
      lastName,
      email

    }
  }
  case LOGOUT_SUCCESS: {
    return{
      ...state,
      loggedin:false,
    }
  }
  }
};
export default UserReducer;