//import the constant action types 
import { Types } from '../constants/Types';

export const signUp = (user) => ({ type: Types.ADD_USER, payload: { user } });

// export const updateProfile = (user) => ({ type: Types.UPDATE_USER, payload: { user } });

// export const formSubmittionStatus = (status) => ({ type: Types.FORM_SUBMITION_STATUS, payload: { status } });

export const login = (username, firstName, lastName, email, currentRotation) => ({ type: Types.LOGIN, payload: { username, firstName, lastName, email, currentRotation } });

export const logOut = () => ({ type:Types.LOGOUT })


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