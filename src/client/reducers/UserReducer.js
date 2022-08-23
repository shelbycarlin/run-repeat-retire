//import all as types from action types 
//reducers return an entirely new object to replace portions of the intial state
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
    retiredShoes: {},
    addShoeTypeToggle: false,
    addShoeId: '',
    addShoeModel: '',
    addShoeBrand: '',
    addShoeType: '',
    addShoeMiles: '',
    addShoePercentage: '',
  },
  formSubmitted: false
  //addShoeImg:'',
};

const UserReducer = (state = intialState, action) => {
  switch (action.type) {
  case Types.LOGIN:
    console.log('LOGIN', action.payload.user);
    return {
      ...state,
      profile: action.payload.user,
      formSubmitted: false
    };


  case Types.ADD_USER:
    console.log('add user', action.payload.user);

    return {
      ...state,
      profile: action.payload.user,
      formSubmitted: false

    };

  case Types.UPDATE_USER:
    return{
      ...state,
      profile:action.payload.user,
      formSubmitted:false
    }

  case Types.FORM_SUBMITION_STATUS:
    return {
      ...state,
      formSubmitted: action.payload.status,
    };

  default:
    return state;
  }
};
export default UserReducer;