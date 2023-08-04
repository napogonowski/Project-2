const Exercise = require("../models/exercise");
const GroupRep = require("../models/groupRep");

module.exports = {
  delete: deleteGroupRep,
  create,
  new: newGroupRep,
  index,
  save,
};

async function save(req, res, next) {
  try {
    const groupRep = await GroupRep.findById(req.params.id);
    const exercise = await Exercise.create({
      exName: groupRep.exerciseName,
      description: groupRep.exerciseDescription,
      video: groupRep.video,
      userId: req.user.id,
      sets: 0,
      reps: 0,
    });
    res.redirect(`/exercises/${exercise.id}/edit`);
  } catch (error) {
    next(error);
  }
}

async function deleteGroupRep(req, res, next) {
  try {
      // finding the correct exercise to delete
      const groupExercise = await GroupRep.findById(req.params.id);
      //  guard
      if (!groupExercise) {
        return res.redirect("/");
      }
      await groupExercise.deleteOne();
      res.redirect("/groupReps");
    } catch (error) {
      next(error);
    }
}

async function create(req, res, next) {
  try {
    // spread used to add owner to GroupRep
    await GroupRep.create({ ...req.body, owner: req.user.id });
    res.redirect("/groupReps");
  } catch (error) {
    next(error);
  }
}

async function newGroupRep(req, res, next) {
  try {
    // matching exercise to request -> 
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
