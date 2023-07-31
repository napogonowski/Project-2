const express = require('express');
const router = express.Router();
const profilesController = require('../controllers/profiles'); 
// get  / profile/:id controller action show

router.get('/profile/:id', profilesController.show);

