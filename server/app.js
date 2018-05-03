var express = require('express');
var app = express();

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test');

app.get('/', function (req, res) {
  res.send('Hello Express!');
});

const Cat = mongoose.model('Cat', { name: String });

const kitty = new Cat({ name: 'Zildjian' });
kitty.save().then(() => console.log('meow'));

app.listen(3001, function () {
  console.log('Example app listening on port 3001!');
});
