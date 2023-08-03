const express = require("express");
const router = express.Router();
const groupRepsController = require("../controllers/groupReps");
const ensureLoggedIn = require("../config/ensureLoggedIn");

// GET -> /groupReps (index)
router.get("/", ensureLoggedIn, groupRepsController.index);

// GET -> /groupReps /new
router.get("/:id/new", ensureLoggedIn, groupRepsController.new);

// GET -> /groupReps /:id (show)
//router.get("/:id", ensureLoggedIn, groupRepsController.show);

//router.post("/:id/save", ensureLoggedIn, groupRepsController.save);

// const groupRep = await GroupRep.findById(req.params.id);
// const exercise = await Exercise.create({ exName: groupRep.exName, userId: req.user.id })
// redirect -> exercise/:id/edit

// POST -> /groupReps (create)
router.post("/", ensureLoggedIn, groupRepsController.create);

// PUT -> /groupReps/:id (update);
router.put("/:id", ensureLoggedIn, groupRepsController.update);

// Delete -> /groupReps/:id
router.delete("/:id", ensureLoggedIn, groupRepsController.delete);

module.exports = router;
