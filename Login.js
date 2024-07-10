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

module.exports = Detail;