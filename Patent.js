const mongoose = require('mongoose');

const detailSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId, // Ensure _id field is defined
    username: String,
    details: String // Example field
},{ collection: 'patent' });

// Create a Mongoose model based on the schema
const Detail = mongoose.model('Detail', detailSchema);

module.exports = Detail;
