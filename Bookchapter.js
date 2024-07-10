// Assuming this is your Mongoose model definition
// departmentSchema.js
const mongoose = require('mongoose');

// Define the schema
const departmentSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    selectedOption:String,
    username:String,
    author_name: String,
    title: String,
    journalname: String,
    published: String,
    date: Date,
    issue:String,
    venue:String,
    vol: String,
    vol_no: String,
    page_no: String,
    indexing: String,
},{ collection: 'Bookchapter' });

// Create a model from the schema
const Department = mongoose.model('Department24', departmentSchema);

module.exports = Department;