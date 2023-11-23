//creat web server
// comments.js - Express setup and web server creation
var express = require('express');
const router = express.Router();
const Comment = require('../models/comment');

// Creating an instance of the Express application
const app = express();

// Middleware, routes, and other configurations could be added here

// Starting the server on a specific port (e.g., 3000)
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

// Rest of your comment-related routes and logic would follow below
// ...

// Sample comment-related routes (as in the provided code)
router.get('/', (req, res) => {
    // Handle GET request logic for comments
});

router.get('/:id', (req, res) => {
    // Handle GET request logic for a specific comment by ID
});

module.exports = router;
