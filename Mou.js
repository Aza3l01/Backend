// Assuming this is your Mongoose model definition
const mongoose = require('mongoose');

const detailSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId, // Ensure _id field is defined
    researchAreas: String // Example field
},{ collection: 'Mou' });

// Create a Mongoose model based on the schema
const Detail = mongoose.model('Details4', detailSchema);

module.exports = Detail;