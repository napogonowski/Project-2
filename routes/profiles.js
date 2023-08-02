const express = require("express");
const router = express.Router();
const injuryProfilesController = require("../controllers/profiles");
const ensureLoggedIn = require("../config/ensureLoggedIn");

//Point to remember profile !== user but an injury profile created by the user

// The SHOW acts as the index as we are only showing the authenticated users data

// slightly confusing but path endpoints are not conventional in this route as a result

// Get -> /profiles (no id - user authenticated already)
router.get("/", ensureLoggedIn, injuryProfilesController.show);

// Get -> /profiles/new
router.get("/new", ensureLoggedIn, injuryProfilesController.new);

// Get -> /profiles/:id/edit
router.get("/edit", ensureLoggedIn, injuryProfilesController.edit);

//Post -> /profiles
router.post("/", ensureLoggedIn, injuryProfilesController.create);

//PUT -> / profiles/:id (update)
router.put("/", ensureLoggedIn, injuryProfilesController.update);

// Delete -> profiles/:id
router.delete("/:id", ensureLoggedIn, injuryProfilesController.delete);

module.exports = router;
