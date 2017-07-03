var mongoose = require('mongoose');
var Schema = mongoose.Schema;
//create new instance of the mongoose.schema. the schema takes an 
//object that shows the shape of your database entries.
var AppointmentsSchema = new Schema({
  appointmentTitle: String,
  appointmentDate: String,
  appointmentTime: String,
  appointmentDescription: String,
  appointmentDestination: String,
  appointmentOrigin: String,
  travelMode: String
});
//export our module to use in server.js
module.exports = mongoose.model('Appointment', AppointmentsSchema);