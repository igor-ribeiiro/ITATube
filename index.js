var express = require('express');

var bodyParser = require('body-parser');

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static('./static'));

var PORT = 8000;

app.listen(PORT);
