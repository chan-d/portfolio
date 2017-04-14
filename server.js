var express = require('express'),
    app = express(),
    bodyParser = require('body-parser'),
    mongoose = require('mongoose');

// configure bodyParser (for receiving form data)
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// serve static files from public folder
app.use(express.static(__dirname + '/public'));

// set view engine to hbs (handlebars)
app.set('view engine', 'hbs');

app.get('*', function(req, res){
  res.render('index');
});


//routes





// connect to mongodb
mongoose.connect('mongodb://localhost/portfolio');

// listen on port 3000
app.listen(3000, function() {
  console.log('server started');
});
