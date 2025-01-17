const mongoose = require('mongoose');

// Define the schema
const departmentSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    selectedOption:String,
    username:String,
    author_name: String,
    title: String,
    confname: String,
    published: String,
    venue: String,
    date: Date,
    vol: String,
    vol_no: String,
    page_no: String,
    indexing: String,
    dol_link: String,
},{ collection: 'National' });

// Create a model from the schema
const Department = mongoose.model('Department13', departmentSchema);
module.exports = Department;