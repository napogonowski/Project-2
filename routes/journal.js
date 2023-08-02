const express = require("express");
const router = express.Router();
const journalsController = require("../controllers/journals");
const ensureLoggedIn = require("../config/ensureLoggedIn");

//main path set to /journals

// GET -> /journals (index)
router.get("/", ensureLoggedIn, journalsController.index);

// GET -> /journals /:id (show)
router.get("/:id", ensureLoggedIn, journalsController.show);

// GET -> /journal/new
router.get("/new", ensureLoggedIn, journalsController.new);

// POST -> /ournals (create)
router.post("/:id", ensureLoggedIn, journalsController.create);

// PUT -> /journal/:id (update);
router.put("/:id", ensureLoggedIn, journalsController.update);

// Delete -> /journals/:id
router.delete("/:id", ensureLoggedIn, journalsController.delete);

module.exports = router;
