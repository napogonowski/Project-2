const User = require('../models/user');
const Exercise = require('../models/excersie');

module.exports = {
    index,
    new: newExcercise,
    show,
    create,
    //update,
    delete: deleteExercise
}

async function deleteExercise (req, res, next){
    try{
        // match the exercise ID to request 
        const exerciseEl = await Exercise.findOne({'Exercise._id': req.params.id});
        //guard 
        if (!exerciseEl) {
            return res.direct('/exercises')
        }
        // exercise model is array based 
        const exerciseIndex = exerciseEl.exercise.findIndex((exercise) => exercise._id.toString() === req.params);
        if (exerciseIndex === -1){
            return res.redirect('/exercises');
        }
        exerciseIndex.Exercise.splice(exerciseIndex, 1);
        res.redirect('/exercises')
    } catch (error) {
        next (error)
    }
}


// async function update(req, res, next) {
//     try{
//         const eId = req.params;
//         // matching exercise id  with update request 
//         const exercise = await Exercise.findByIdAndUpdate(eId, req.body);
//         // guard 
//         if (!exercise) { 
//             return res.redirect('/exercises')
//         }
//         return exercise;
//     } catch (error) {
//         next(error)
//     }
//     res.redirect('/exercises/:id'); 
// }


async function create (req, res, next) { 
    try{
        const newExercise = req.body;
        Exercise.push(newExercise)
    } catch (error){
        next(error)
    }
}


async function show ( req, res, next) { 
    try{
        const user = await User.findById(req.user.id);
        const exercise = await Exercise.findById(req.params.id)
        res.render('exercises/show', {title: 'Solo exercise', exercise, user})
    } catch (error) {
        next(error)
    }
}


async function index (req, res, next) {
    try{
    // finding all the exercises
    // passing them to render
    const exercises = await Exercise.find({});
    res.render('exercises/index', {title: "All Exercises", exercises});
        

    } catch (error) {
        next(error)
    }
}

async function newExcercise (req, res) {
    try{
        const freshExercise = await Exercise.findById(req.params.id);
        res.render('exercises/new', {title: "New Exercise" , freshExercise})

    } catch (error) {
        next(error)
    }
}