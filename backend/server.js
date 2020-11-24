//Requirement declarations
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

//environmental variables from local file
require('dotenv').config();

const app = express();

//Middleware
app.use(cors());
app.use(express.json());
// app.use(express.urlencoded({extended: false}));

//Mongo DB connection
const uri = process.env.ATLAS_URI;
mongoose.connect(uri, {useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true});

const connection = mongoose.connection;
connection.once('open', () => {
    console.log('Connected with MongoDB successfully');
});

//Routes for activities and users interaction
app.use('/activities', require('./routes/activities'));
app.use('/users', require('./routes/users'));

const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`Running on port ${port}`);
});