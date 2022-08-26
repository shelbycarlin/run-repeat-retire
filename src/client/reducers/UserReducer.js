//import all as types from action types 
//reducers return an entirely new object to replace portions of the intial state
//import { user } from 'pg/lib/defaults';
import { Types } from '../constants/Types.js';

//we want to declare the intial state
const intialState = {
  //each property that goes into intialState is considered a "slice" of the store 
  profile: {
    username: '',
    firstName: '',
    lastName: '',
    email: '',
    currentRotation: {},
    retiredShoes: {}
  },
  add:{
    addShoeTypeToggle: false,
    addShoeId: '',
    addShoeModel: '',
    addShoeBrand: '',
    addShoeType: '',
    addShoeMiles: '',
    addShoePercentage: '',
  },
  loginStatus:false,
  //addShoeImg:'',
};

const UserReducer = (state = intialState, action) => {
  switch (action.type) {
  case Types.LOGIN:{
    //deconstruct the action payload 
    const {username, firstName, lastName,email, currentRotation} = action.payload;
    //console.log('LOGIN', action.payload);
    return {
      ...state,
      profile: {
        username:username,
        firstName:firstName,
        lastName:lastName,
        email:email,
        currentRotation:currentRotation
      },
      loginStatus:true,
    };

  }
  // case Types.ADD_USER:
  //   console.log('add user', action.payload.user);

  //   return {
  //     ...state,
  //     profile: action.payload.user,
  //     formSubmitted: false

  //   };

  // case Types.UPDATE_USER:
  //   return {
  //     ...state,
  //     profile: action.payload.user,
  //     formSubmitted: false
  //   };

  // case Types.FORM_SUBMITION_STATUS:
  //   return {
  //     ...state,
  //     formSubmitted: action.payload.status,
  //   };

  case Types.LOGOUT:
    return {
      ...state,
      loginStatus: false,
    };

  default:
    return state;
  }
};
export default UserReducer;