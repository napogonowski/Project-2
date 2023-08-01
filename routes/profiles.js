const express = require('express');
const router = express.Router();
const profilesController = require('../controllers/profiles'); 
const profile = require('../models/profile');


// get  / profile/:id controller action show


router.get('/', profilesController.show);

router.get('/new', profilesController.new);
router.post('/', profilesController.create);



module.exports = router; 
