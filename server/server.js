//we want to require the needed packages
const express = require('express');
const path = require('path');
//we want to intialized an instance of express
const app = express();
//we want to declare a port for the application to listen on
const port = 3000;
//we want to require our routes file in
const router = require('./routes/Routes.js');
//we want to intialize the express server
app.use(express.json())


//we are statically serving the files from the dist folder
app.use(express.static(path.resolve(__dirname, '../dist')));

//we want the app to use the api path way and use the routes from the routes files
app.use('/api', router);


//local error handler 
app.use((req, res) => res.status(404).send('Page not Found'));

//global error handler 
app.use((err, req, res) => {
  const defaultErr = {
    log: 'Error handler caught unknown middleware error',
    status: 500,
    message: { err: 'An error occured' }
  };
  const errorObj = Object.assign(defaultErr, err);
  console.log(errorObj);
  return res.status((errorObj.status)).json(errorObj.message);
});

//we focus the app to listen on the specific port and add a console.log to confirme its listening
app.listen(port, () => {
  console.log(`listening on port ${port}`);
})