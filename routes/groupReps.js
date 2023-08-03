const express = require("express");
const router = express.Router();
const groupRepsController = require("../controllers/groupReps");
const ensureLoggedIn = require("../config/ensureLoggedIn");

// root path set to /groupReps: 
// GET -> /groupReps (index)
router.get("/", ensureLoggedIn, groupRepsController.index);

// GET -> /groupReps/new
router.get("/:id/new", ensureLoggedIn, groupRepsController.new);

// GET -> /groupReps /:id (show)
//router.get("/:id", ensureLoggedIn, groupRepsController.show);

router.post("/:id/save", ensureLoggedIn, groupRepsController.save);


// POST -> /groupReps (create)
router.post("/", ensureLoggedIn, groupRepsController.create);

// Delete -> /groupReps/:id
router.delete("/:id", ensureLoggedIn, groupRepsController.delete);

module.exports = router;
