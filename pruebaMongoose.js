var mongoose = require('mongoose');

var userSchema = mongoose.Schema({
  name: String
});

var User = mongoose.model('User', userSchema);

mongoose.connect('mongodb://localhost:27017/pruebamongoose');

var user1 = new User({name:'david2'});
var user2 = new User({name:'pepe2'});
var user3 = new User({name:'juan2'});

user1.save(function (err, user) {
  if (err){} // TODO handle the error
});

user2.save(function (err, user) {
  if (err){} // TODO handle the error
});

user3.save(function (err, user) {
  if (err){} // TODO handle the error
});

User.find(function (err, users) {
  if (err) {} // TODO handle err
  console.log(users);
});
/*
var kittySchema = mongoose.Schema({
    name: String
});

var Kitten = mongoose.model('Kitten', kittySchema);

var silence = new Kitten({ name: 'Silence' });
console.log(silence.name);

mongoose.connect('mongodb://localhost:27017');

var fluffy = new Kitten({ name: 'fluffy' });

fluffy.save(function (err, fluffy) {
  if (err){} // TODO handle the error
});

Kitten.find(function (err, kittens) {
  if (err){} // TODO handle err
  console.log(kittens);
});
*/
