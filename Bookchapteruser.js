const mongoose = require('mongoose');

// Define the schema
const departmentSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    selectedOption:String,
    username:String,
    textbox: String
},{ collection: 'Bookchapteruser' });

// Create a model from the schema
const Department = mongoose.model('Department25', departmentSchema);
module.exports = Department;