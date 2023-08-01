const express = require('express');
const router = express.Router();
const injuryProfilesController = require('../controllers/profiles'); 



// get  / profiles/:id controller action show


router.get('/', injuryProfilesController.show);

router.get('/new', injuryProfilesController.new);
router.post('/', injuryProfilesController.create);
router.delete('/:id', injuryProfilesController.delete)



module.exports = router; 
