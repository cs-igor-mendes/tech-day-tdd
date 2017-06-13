const express = require('express');
const app = express();

require('./config/mongo');
require('./routes')(app);


app.listen('3000', err => console.log("Startou", err));

module.exports = app;
