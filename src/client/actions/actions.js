//import the constant action types 
import { SIGNUP_SUCCESS, LOGIN_SUCCESS, LOGOUT_SUCCESS } from '../constants/Types';

//pure functions
export const getLogin = (username, firstName, lastName, email, currentRotation) => ({
  type: LOGIN_SUCCESS,
  payload: {
    username,
    firstName,
    lastName,
    email,
    currentRotation
  }
});

export const signUp = (username, firstName, lastName, email) => ({
  type: SIGNUP_SUCCESS,
  payload: {
    username,
    firstName,
    lastName,
    email
  }
});

export const logOut = () => ({
  type: LOGOUT_SUCCESS,
});