// Assuming this is your Mongoose model definition
// departmentSchema.js
const mongoose = require('mongoose');

// Define the schema
const departmentSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    username:String,
    degree: String,
    field: String,
    university: String,
    year: Date,
},{ collection: 'Educational' });

// Create a model from the schema
const Department = mongoose.model('Department1', departmentSchema);

module.exports = Department;
