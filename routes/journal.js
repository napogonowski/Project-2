const express = require('express');
const router = express.router;
const journalsController = require('../controllers/journals');

//main path set to /journals

// GET -> /journals (index)
router.get('/', journalsController.index);

// GET -> /journals /:id (show)
router.get('/:id', journalsController.show);

// GET -> /journal/new 
router.get('/new', journalsController.new);

// POST -> /ournals (create)
router.post('/:id', journalsController.create);

// PUT -> /journal/:id (update);
router.put('/:id', journalsController.update);


// Delete -> /journals/:id 
router.delete('/:id', journalsController.delete);

modules.exports = router;