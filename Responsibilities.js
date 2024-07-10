const mongoose = require('mongoose');

// Define the schema
const departmentSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    username: String,
    designation: String,
    fromDate: Date,
    toDate: Date
},{ collection: 'Responsibilities' });

// Create a model from the schema
const Department = mongoose.model('Dpartment2', departmentSchema);

module.exports = Department;
