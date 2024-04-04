// Assuming this is your Mongoose model definition
// departmentSchema.js
const mongoose = require('mongoose');

// Define the schema
const departmentSchema = new mongoose.Schema({
    email: String,
    phone: String,
},{ collection: 'Details' });

// Create a model from the schema
const Department = mongoose.model('Department28', departmentSchema);

module.exports = Department;