//require in needed packages
const express = require('express');
//declare and intialize the express router 
const router = express.Router();
//require in the middleware controllers
const { createAccount, login, getCurrentShoes } = require('../controller/accountController.js');
const { addShoe } = require('../controller/shoeController.js');

//post request for signup 
router.post('/signup', createAccount, (req,res) => {
  return res.status(200).json(res.locals.signup)
})

//post request for login 
router.post('/login', login, getCurrentShoes, (req,res) => {
  return res.status(200).json(res.locals.login)
})

//post request for add shoes 
router.post('/addshoe/:username', addShoe, (req,res) => {
  return res.status(200).json(res.locals.shoeAdd)
})

//patch request for addmiles
// router.patch('/addmiles/:username/:shoeid', (req,res) => {
//   return res.status(200).json()
// })

//patch request for deletemiles 
router.patch('/addmiles/:username/:shoeid', (req,res) => {
  return res.status(200).json()
})

//patch request for retire shoes
// router.patch('/addmiles/:username/:shoeid', (req,res) => {
//   return res.status(200).json()
// })


module.exports = router;