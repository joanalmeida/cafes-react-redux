var mongoose = require('mongoose');
var Coffee = mongoose.model('Coffee');

exports.findAllCoffees = function(req, res) {
    Coffee.find(function(err, coffees) {
        if(err) return res.send(500, err.message)

        res.json(coffees)
    });
}
