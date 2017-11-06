var express = require('express'),
    bodyParser = require('body-parser'),
    path = require('path'),
    mongoose = require('mongoose');
var app = express();

// Connection to DB
mongoose.connect('mongodb://localhost/coffees', function(err, res){
    if(err) throw err;
    console.log('Connected to Database');
});

//Cors
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

// Middlewares
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

/*
app.set('view engine', 'ejs');

app.use(express.static(__dirname + "/public"));
app.use('/dist', express.static(__dirname + "/dist"));
*/

//Modelos y Controllers
var models = require('./models/coffees');
var CoffeesCtrl = require('./controllers/coffees');

//API Routes
var coffeesApi = express.Router();

coffeesApi.route('/coffees')
    .get(CoffeesCtrl.findAllCoffees);

//app.use(express.static(path.join(__dirname + '/dist')));
//app.use(express.static(path.join(__dirname + '/public')));

app.use('/api', coffeesApi);

/*
app.get('/', function(req, res){
//res.render('home');
    res.sendFile(__dirname + '/index.html');
});
*/

app.listen(9000, function(){
    console.log("Server listening on port 9000");
});
