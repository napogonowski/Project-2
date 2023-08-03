const User = require("../models/user");
const Exercise = require("../models/exercise");
const GroupRep = require("../models/groupRep");

module.exports = {
  delete: deleteGroupRep,
  create,
  new: newGroupRep,
  index,
  //show,
  update,
};

async function update(req, res, next) {
  try {
  } catch (error) {
    next(error);
  }
}

async function deleteGroupRep(req, res, next) {
  try {
  } catch (error) {
    next(error);
  }
}
async function create(req, res, next) {
  try {
    await GroupRep.create({...req.body, owner: req.user.id})
    
    res.redirect('/groupReps')
  } catch (error) {
    next(error);
  }
}


async function newGroupRep(req, res, next) {
  try {
    const sharedExercise = await Exercise.findById(req.params.id);
    res.render("groupReps/new", { title: "Share Exercise", sharedExercise });
  } catch (error) {
    next(error);
  }
}

async function index(req, res, next) {
  try {
    const groupReps = await GroupRep.find();
    res.render("groupReps/index", {
      title: "Community Exercises",
      groupReps,
    });
  } catch (error) {
    next(error);
  }
}

