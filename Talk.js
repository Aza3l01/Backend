// Assuming this is your Mongoose model definition
const mongoose = require('mongoose');

const detailSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId, // Ensure _id field is defined
    username:String,
    researchAreas: String // Example field
},{ collection: 'Talk' });

// Create a Mongoose model based on the schema
const Detail = mongoose.model('Details7', detailSchema);

module.exports = Detail;