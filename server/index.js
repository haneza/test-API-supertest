'use strict';

let express = require('express');
let app = express();
let users = ['Mia', 'Blacky', 'Leo'];

app.get('/api/users', function (req, res) {
  res.json(users);
});

module.exports = app;
