<<<<<<< HEAD
// Assuming this is your Mongoose model definition
// departmentSchema.js
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

=======
// Assuming this is your Mongoose model definition
// departmentSchema.js
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

>>>>>>> 08d45ae64c344504e4eb8f124945bf7901e0d92d
module.exports = Department;