var express = require('express');

var app = express();

var port = 5000;

app.use(express.static('public'));
app.use(express.static('src/views'));

app.get('/index', function(req, res){
    res.send('Hello World');
});

app.get('/Books', function(req, res){
    res.send('Hello Books');
});

app.get('/MagusAcademySite1', function(req, res){
    res.send('Magus Academy Site');
});

app.listen(port, function(err){
    console.log('running server on port ' + port);
});