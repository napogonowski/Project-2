const express = require('express');
const router = express.Router();
const injuryProfilesController = require('../controllers/profiles'); 


//Point to remember profile !== user but an injury profile created by the user 

// The SHOW acts as the index as we are only showing the authenticated users data

// slightly confusing but path endpoints are not conventional in this route as a result


// Get -> /profiles (no id - user authenticated already)
router.get('/', injuryProfilesController.show);

// Get -> /profiles/new 
router.get('/new', injuryProfilesController.new);

//Post -> /profiles 
router.post('/', injuryProfilesController.create);

//PUT -> / profiles/:id (update)
//router.put('/', injuryProfilesController.update)

// Delete -> profiles/:id
router.delete('/:id', injuryProfilesController.delete);


module.exports = router; 
