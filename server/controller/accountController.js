//import db model 
const db = require('../models/dataModels');
//import password hashing library Argon2
const argon2 = require('argon2');

module.exports = {
  //createAccount middleware function 
  //tested with postman and works
  createAccount: async (req, res, next) => {
    //declare and destructure the req body 
    const { firstName, lastName, username, email, password } = req.body;
    //declare array to into the string for data base queries
    const queryArray = [firstName, lastName, username, email];
    //hash password
    const hash = await argon2.hash(password);
    //push onto the array 
    queryArray.push(hash);
    //declare query string 
    const queryString = 'INSERT INTO Users(first_name,last_name, username, email, hash_password) VALUES($1,$2,$3,$4,$5) RETURNING *';

    //then we need to make the actual query to the database
    db.query(queryString, queryArray, (err, data) => {
      if (err) {
        //check what the error message is
        if (err.detail === `Key (username)=(${username}) already exists.`) {
          //we need a error handler to create a respomse to be assigned to equal 'Unsuccessful Username' if the username is already taken
          res.locals.signup = 'Unsuccessful Username';
          return next();
        } else {
          //we need a error handler to assign a response variable to equal 'Unsuccessful Email' if email is linked to account already 
          res.locals.signup = 'Unsuccessful Email';
          return next();
        }
        //we need to have multiple error handling if the email/username is connected to an account 
        //if query is successful we want to assign a variable to be equal 'Success Account Created' and send it forward 
      } else {
        res.locals.signup = 'Success Account Created';
        return next();
      }

    });
  },

  //login middleware functionality
  //  login: (req,res,next) => {
  //   //we wanted to deconstruct the req body with the username and password 

  //   //we want to query the database using the username and get the hashed password 
  //     //then we want to hash the password from the body and compare it to the hashed password from the db 
  //     //if false we want to return the varible to be false 
  //     //if true then global variable with user_id next
  //  },

  //  //getInfoOnLogin middleware functionality 
  //  getCurrentShoes: (req,res,next) => {
  //    //console.log the res.locals variable
  //    //declare the array passing in user_id and 'Current'
  //    //declare query string shoe table where user id and current type return all 

  //    //db.query passing in the string and the array
  //    //we want to pass forward a global variable containing the array of objects of current shoes



  //  }
};