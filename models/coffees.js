var mongoose = require('mongoose'),
    Schema   = mongoose.Schema;

var coffeeSchema = new Schema({
    _id:         { type: String },
    name:        { type: String },
    img:         { type: String },
    description: { type: String }

});

module.exports = mongoose.model('Coffee', coffeeSchema)