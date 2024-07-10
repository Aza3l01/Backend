const mongoose = require('mongoose');

// Define the schema
const departmentSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    title: String,
    username: String,
    designation: String,
    department: String,
    email: String,
    phone: String,
},{ collection: 'Details' });

// Create a model from the schema
const Department = mongoose.model('Department28', departmentSchema);
module.exports = Department;