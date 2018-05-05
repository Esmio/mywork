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


const Work = mongoose.model('Work', {
    title: String,
    info: String,
    customerId: String,
    followUpDate: String,
    followUp: Array,
})

const FollowUp = mongoose.model('followUp', {
  customerId: String,
  info: String,
  followUpDate: String,
})

const f1 = new FollowUp({customerId:'1111', info: 'fllowuppup', followUpDate: 'fff'});
const work1 = new Work({
  title: 'fengjin',
  info: 'infoaaaa',
  customerId: '1111',
  followUpDate: '2fff',
  followUp: [f1]
})

work1.save().then(() => console.log('work'));

app.listen(3001, function () {
  console.log('Example app listening on port 3001!');
});
