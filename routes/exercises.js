const express = require('express');
const router = express.Router();
const exercisesController = require('../controllers/exercises'); 

// main path set to /exercises

//GET -> /exercises (index)
router.get('/', exercisesController.index);

// GET -> /exercises/:id (SHOW)
router.get('/:id', exercisesController.show);
// GET to /exercises/new 
router.get('/new', exercisesController.new);

// POST -> /exercises (create)
router.post('/', exercisesController.create);

// PUT -> /exercises/:id (update)

router.put('/:id', exercisesController.update);

// DELETE -> /exercises/:id 

router.delete('/:id', exercisesController.delete);

module.exports = router;