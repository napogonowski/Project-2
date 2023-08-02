const express = require("express");
const router = express.Router();
const exercisesController = require("../controllers/exercises");
const ensureLoggedIn = require("../config/ensureLoggedIn");

// main path set to /exercises

//GET -> /exercises (index)
router.get("/", ensureLoggedIn, exercisesController.index);

// GET to /exercises/new
router.get("/new", ensureLoggedIn, exercisesController.new);

// GET -> /exercises/:id (SHOW)
router.get("/:id", ensureLoggedIn, exercisesController.show);

//GET -> /exercises/:id/edit
router.get("/:id/edit", ensureLoggedIn, exercisesController.edit);

// POST -> /exercises (create)
router.post("/", ensureLoggedIn, exercisesController.create);

// PUT -> /exercises/:id (update)
router.put("/:id", ensureLoggedIn, exercisesController.update);

// DELETE -> /exercises/:id
router.delete("/:id", ensureLoggedIn, exercisesController.delete);

module.exports = router;
