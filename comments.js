//create web server
const express = require('express');
const app = express();
const port = 3000;
const path = require('path');
const bodyParser = require('body-parser');

//connect to database
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/comments', {useNewUrlParser: true});

//create schema
const Schema = mongoose.Schema;
const commentSchema = new Schema({
    name: String,
    comment: String
});

//create model
const Comment = mongoose.model('Comment', commentSchema);

//middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('server/public'));

//routes
app.get('/comments', (req, res) => {
    Comment.find({}, (err, data) => {
        if (err) {
            console.log(err);
            res.sendStatus(500);
        } else {
            console.log('data from db', data);
            res.send(data);
        }
    });
});