// Imported required packages
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');

// MongoDB Database URL
const mongoDatabase = 'mongodb://localhost:27017/employeeDetails';

// Created express server
const app = express();
mongoose.Promise = global.Promise;

// Connect to MongoDB Database
mongoose.connect(mongoDatabase)
    .then(() => {
        console.log('Database is connected');
    })
    .catch(err => {
        console.log('There is a problem while connecting to the database: ' + err);
    });

// Import the employee routes
const employeeRoutes = require('./Routes/Employee.route');

// Convert incoming data to JSON format
app.use(bodyParser.json());

// Enable CORS for all routes with specific origin
app.use(cors({
    origin: 'http://localhost:3000' // Replace with your frontend URL
}));


// Setup for the server port number
const port = process.env.PORT || 4000;

// Routes Configuration
app.use('/employees', employeeRoutes);

// Starting the Express server
const server = app.listen(port, () => {
    console.log('Server Listening On Port: ' + port);
});
