// Create web server
// Define routes
// Use the controller
// Export the router

const express = require('express');
const commentsController = require('../controllers/comments');

const router = express.Router();

// Create a comment
router.post('/comments', commentsController.createComment);

// Get all comments
router.get('/comments', commentsController.getAllComments);

// Get a comment
router.get('/comments/:id', commentsController.getComment);

// Update a comment
router.put('/comments/:id', commentsController.updateComment);

// Delete a comment
router.delete('/comments/:id', commentsController.deleteComment);

module.exports = router;
