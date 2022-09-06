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
    db.query(queryString, queryArray, (err) => {
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
  //tested with postman and works
  login: (req, res, next) => {
    //we wanted to deconstruct the req body with the username and password 
    const { username, password } = req.body;
    //declare 
    const queryArray = [username];
    //declare the query string 
    const queryString = 'SELECT * FROM Users WHERE username = $1';

    //we want to query the database using the username and get the hashed password 
    db.query(queryString, queryArray, async (err, data) => {
      if (err) {
        res.locals.login = 'Username or Password Incorrect';
        return next();
      } else {
        res.locals.user = await data.rows[0];
        //console.log(res.locals.userId)
        //console.log(res.locals.userId);
        const hash = await data.rows[0].hash_password;
        //then we want to take the password and compare it to the hashed password from the db 
        if (await argon2.verify(hash, password)) {
          //if true then global variable with user_id next
          res.locals.login = 'Login Successful';
          return next();
        } else {
          //if false we want to return the varible to be false 
          res.locals.login = 'Username or Password Incorrect';
          return next();
        }
      }
    });
  },

  //getInfoOnLogin middleware functionality 
  //tested with postman works
  getCurrentShoes: (req, res, next) => {
    //console.log the res.locals variable
    if (!res.locals.login === 'Login Successful') {
      // this will return next and have res.locals.login not reassigned so it will pass forward the string of incorrect password
      return next();
    } else {
      //we also want to send forward username, firstname last name and email
      //declare the array passing in user_id and 'Current'
      const queryArray = [res.locals.user.user_id, 'Current'];
      //declare query string shoe table where user id and current type return all 
      const queryString = 'SELECT * FROM Shoes WHERE user_id = $1 AND shoe_status = $2';

      //db.query passing in the string and the array
      db.query(queryString, queryArray, (err, data) => {
        if (err) {
          return next({
            log: 'Express error handler caught in createAccount middleware function',
            message: { err }
          });
        } else {
          //we want to pass forward a global variable containing the array of objects of current shoes
          res.locals.login = {
            user: {
              firstName: res.locals.user.first_name,
              lastName: res.locals.user.last_name,
              email: res.locals.user.email
            },
            current_Rotation: data.rows
          };
          return next();
        }
      });
    }
  }
};