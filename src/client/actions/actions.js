//import the constant action types 
import { Types } from '../constants/Types';

export const ActionCreators = {
  addProfile: (user) => ({type:Types.ADD_USER, payload:{ user } }),

  updateProfile: (user) => ({ type: Types.UPDATE_USER, payload: { user } }),

  formSubmittionStatus: (status) => ({ type: Types.FORM_SUBMITION_STATUS, payload: { status }}),
  
  login: (user) => ({ type: Types.LOGIN, payload: { user } })
}

//pure functions
// export const getLogin = (username, firstName, lastName, email, currentRotation) => ({
//   type: LOGIN_SUCCESS,
//   payload: {
//     username,
//     firstName,
//     lastName,
//     email,
//     currentRotation
//   }
// });

// export const signUp = (username, firstName, lastName, email) => ({
//   type: SIGNUP_SUCCESS,
//   payload: {
//     username,
//     firstName,
//     lastName,
//     email
//   }
// });

// export const logOut = () => ({
//   type: LOGOUT_SUCCESS,
// });