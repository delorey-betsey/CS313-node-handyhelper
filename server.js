// load the things we need
var express = require('express');
var app = express();

// set the view engine to ejs
app.set('view engine', 'ejs');

// use res.render to load up an ejs view file
// respond with "hello world" when a GET request is made to the homepage
app.get('/hello', function (req, res) {
    res.send('hello world')
  })

app.listen(8080);
console.log('8080 is the magic port');