// Packages
var path = require('path');
var fs = require('fs');
var express = require('express');

// Imports
var indexRoutes = require('./routes/index');

// Create App
var app = express();

// View Engine
// Tell express how to return a file
app.set('view engine', 'html');
app.engine('html', (path, options, callbacks) => {
  fs.readFile(path, 'utf-8', callbacks);
});

// Middleware
app.use(express.static(path.join(__dirname, '../client')));

// Routes
app.use('/', indexRoutes);

// Error handling
app.use((err, req, res, next) => {
  res.status(err.status || 500);
});

// Serve app
module.exports = app;
