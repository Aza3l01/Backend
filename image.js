// Assuming this is your Mongoose model definition
const mongoose = require('mongoose');

const detailSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId, // Ensure _id field is defined
    imageUrl:String,
    username: String // Example field
},{ collection: 'image' });

// Create a Mongoose model based on the schema
const image = mongoose.model('image', detailSchema);

module.exports = image;