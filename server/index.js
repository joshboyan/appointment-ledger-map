//first we import our dependencies…
var express = require('express');
var path = require('path');
var react = require('react');
var ReactDOMServer = require('react-dom/server');
var render = require('./render');
var mongoose = require('mongoose');
var cors = require('cors');
var bodyParser = require('body-parser');
var Appointment = require('./model/appointments');

//and create our instances
var app = express();
var router = express.Router();

app.use(express.static(path.resolve(__dirname, '../react-ui/build/')));
//set our port to either a predetermined port number if you have set 
//it up, or 3899
var port = process.env.PORT || 3899;
//db config
mongoose.connect('mongodb://josh11:josh11@ds133162.mlab.com:33162/heroku_tl016m5d');
app.use(cors());
//now we should configure the API to use bodyParser and look for 
//JSON data in the request body
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//now we can set the route path & initialize the API
router.get('/api', function(req, res) {
  res.send('Hello World!');
});
// All remaining requests return the React app, so it can handle routing.
app.get('*', function(request, response) {
  response.sendFile(path.resolve(__dirname, '../react-ui/build/', 'index.html'));
});
//Use our router configuration when we call /api
app.use('/', router);
//starts the server and listens for requests
app.listen(port, function() {
 console.log('api running on port' + port);
});
//adding the /appointments route to our /api router
router.route('/api/appointments')
 //retrieve all appointments from the database
 .get(function(req, res) {
 //looks at our Appointment Schema
 Appointment.find(function(err, appointments) {
 if (err)
 res.send(err);
 //responds with a json object of our database appointments.
 res.json(appointments)
 });
 })
 //post new appointment to the database
 .post(function(req, res) {
  var appointment = new Appointment();
  //body parser lets us use the req.body
  appointment.appointmentTitle = req.body.appointmentTitle;
  appointment.appointmentDate = req.body.appointmentDate;
  appointment.appointmentTime = req.body.appointmentTime;
  appointment.appointmentDescription = req.body.appointmentDescription;
  appointment.appointmentDestination = req.body.appointmentDestination;
  appointment.appointmentOrigin = req.body.appointmentOrigin;
  appointment.travelMode = req.body.travelMode;
  appointment.save(function(err) {
  if (err) 
    res.send(err);
    res.json({ message: 'Appointment successfully added!' });
  });
 });
//Use our router configuration when we call /api
//...
