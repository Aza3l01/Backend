<<<<<<< HEAD
// Assuming this is your Mongoose model definition
// departmentSchema.js
const mongoose = require('mongoose');

// Define the schema
const departmentSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    username:String,
    selectedOption:String,
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
    impact: String,
    dol_link: String,
},{ collection: 'Internationalconference' });

// Create a model from the schema
const Department = mongoose.model('Department22', departmentSchema);

=======
// Assuming this is your Mongoose model definition
// departmentSchema.js
const mongoose = require('mongoose');

// Define the schema
const departmentSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    username:String,
    selectedOption:String,
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
    impact: String,
    dol_link: String,
},{ collection: 'Internationalconference' });

// Create a model from the schema
const Department = mongoose.model('Department22', departmentSchema);

>>>>>>> 08d45ae64c344504e4eb8f124945bf7901e0d92d
module.exports = Department;