//import db model 
const db = require('../models/dataModels');

module.exports = {
  addShoe: (req, res, next) => {
    const { shoe_title, model, brand, shoe_type } = req.body;
    console.log(shoe_title, model, brand, shoe_type);
    console.log(req.params);
    const { username } = req.params;
    console.log(username);

    const queryArray = [shoe_title, model, brand, shoe_type, username];

    const queryString = 'INSERT INTO Shoes(shoe_title, model, brand, shoe_type, user_id) VALUES($1, $2, $3, $4, (SELECT user_id FROM Users WHERE username = $5)) RETURNING *';

    db.query(queryString, queryArray)
      .then((data) => {
        console.log(data.rows[0]);
        res.locals.shoeAdd = data.rows[0];
        return next();
      })
      .catch((err) => next({
        log: 'Express error handler caught in addShoe middleware function',
        message: { err }
      }));

  }
};