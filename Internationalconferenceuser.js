// Assuming this is your Mongoose model definition
// departmentSchema.js
const mongoose = require('mongoose');

// Define the schema
const departmentSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    username:String,
    selectedOption:String,
    textbox: String
},{ collection: 'Internationalconferenceuser' });

// Create a model from the schema
const Department = mongoose.model('Department23', departmentSchema);

module.exports = Department;