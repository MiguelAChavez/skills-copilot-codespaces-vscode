//crear web service 

//importar express
const express = require('express');
//importar el controlador
const CommentController = require('../controllers/comment');
//importar el middleware
const md_auth = require('../middlewares/authenticated');