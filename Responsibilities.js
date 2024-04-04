// Assuming this is your Mongoose model definition
// departmentSchema.js
const mongoose = require('mongoose');

// Define the schema
const departmentSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    designation: String,
    fromDate: Date,
    toDate: Date
},{ collection: 'Responsibilities' });

// Create a model from the schema
const Department = mongoose.model('Departmen', departmentSchema);

module.exports = Department;
