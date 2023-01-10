var express = require('express');
var bodyParser = require('body-parser');
var apiRouter = require('./apiRouter').router;

//routes
var item_route = require('./routes/ItemCtrl');

const pokemon_route = require("./routes/pokemonCtrl");

var server = express();

server.use(bodyParser.urlencoded({ extended: true }));
server.use(bodyParser.json());

server.get('/', function(req, res) {
  res.setHeader('Content-Type', 'text/html');
  res.status(200).send('<h1>It works!</h1>');
});

server.use('/api/', apiRouter);

server.listen(8080, function() {
    console.log('Server is running...');
});