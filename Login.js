<<<<<<< HEAD
// Assuming this is your Mongoose model definition
const mongoose = require('mongoose');

const detailSchema = new mongoose.Schema({
    id: Number,
    name: String,
    username: String,
    password: String
},{ collection: 'Login' });

// Create a Mongoose model based on the schema
const Detail = mongoose.model('Deta', detailSchema);

=======
// Assuming this is your Mongoose model definition
const mongoose = require('mongoose');

const detailSchema = new mongoose.Schema({
    id: Number,
    name: String,
    username: String,
    password: String
},{ collection: 'Login' });

// Create a Mongoose model based on the schema
const Detail = mongoose.model('Deta', detailSchema);

>>>>>>> 08d45ae64c344504e4eb8f124945bf7901e0d92d
module.exports = Detail;