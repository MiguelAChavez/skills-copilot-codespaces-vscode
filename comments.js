//creat web server
var express = require('express');
const router = express.Router();
const Comment = require('../models/comment');

//handle a get request at path /comments
router.get('/', (req, res) => {
    Comment.find()
        .then((comments) => {
            res.json(comments);
        })
        .catch((err) => {
            res.status(500).send(err.message);
        });
}
);

router.get('/:id', (req, res) => {
    Comment.findById(req.params.id)
        .then((comment) => {
            res.json(comment);
        })
        .catch((err) => {
            res.status(500).send(err.message);
        });
}); 
