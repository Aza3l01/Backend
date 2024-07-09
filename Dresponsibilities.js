// Assuming this is your Mongoose model definition
// departmentSchema.js
const mongoose = require('mongoose');

// Define the schema
const departmentSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    username:String,
    designation: String,
    fromDate: Date,
    toDate: Date
},{ collection: 'Dresponsibilities' });

// Create a model from the schema
const Department = mongoose.model('Department', departmentSchema);

module.exports = Department;
