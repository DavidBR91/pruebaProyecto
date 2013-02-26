var mongoose = require('mongoose');
var express = require('express');
//var application_root = __dirname;
//var path = require('path');

var userSchema = mongoose.Schema({
  name: {type: String, required: true},
  password: {type: String, required: true}
});

var UserModel = mongoose.model('User', userSchema);

var app = express.createServer();

app.configure(function(){
  app.use(express.methodOverride());
  app.use(express.bodyParser());
  app.use(app.router);
});

mongoose.connect('mongodb://localhost:27017/pruebamongoose');

app.get('/users', function(req, res){
  'use strict';
  UserModel.find(function (err, users) {
  if (err) {} // TODO handle err
  res.send(users);
  });
});

app.get('/users/:id_user', function(req, res){
  'use strict';
  var id = req.param('id_user', null);
  UserModel.findById(id, function(err, user){
      res.send(user);
  });
});

app.post('/users', function(req, res){
  'use strict';
  console.log('body: ' + req.body);
  var user = new UserModel({
    name: req.body.name,
    password: req.body.password
  });
  user.save(function (err, user) {
  if (err){} // TODO handle the error
  res.send(user);
  });
});

app.delete('/users/:id_user', function(req, res){
  'use strict';
  var id = req.param('id_user', null);
  UserModel.findById(id, function(err, user){
      user.remove(function(err){
        if (err){}
        console.log('removed');
        res.send(200);
      });
  });
});

app.listen(4242);
