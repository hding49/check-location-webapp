const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var ProductSchema = new Schema({
    name: {type: String, required: true,max: 100},
    address: {type: String, required: true, max: 100},
    
});


// Export the model
module.exports = mongoose.model('Product', ProductSchema);