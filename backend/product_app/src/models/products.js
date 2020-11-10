// Import Mongoose and password Encrypt
var mongoose = require('mongoose');
var bcrypt   = require('bcrypt-nodejs');

// define the schema for User model
var productSchema = mongoose.Schema({
    // Using local for Local Strategy Passport
    local: {
        name: String,
        price: Float32Array,
    }

});

// create the model for users and expose it to our app
module.exports = mongoose.model('Product', productSchema);