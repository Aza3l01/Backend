// Assuming this is your Mongoose model definition
// departmentSchema.js
const mongoose = require('mongoose');

// Define the schema
const departmentSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    username: String,
    designation: String,
    branch: String,
    college: String,
    fromDate: Date,
    toDate: Date
},{ collection: 'Experience' });

// Create a model from the schema
const Department = mongoose.model('Department2', departmentSchema);

module.exports = Department;
