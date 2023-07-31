const User = require('../models/user')
const Profile = require('../models/profile'); 
const Exercise = require('../models/excersie');
const Journal = require('../models/journal');


module.exports = {
    show
}

async function show (req, res) { 
        const profile = await Profile.find({user: req.user.id, injury: Profile.injury, goal: Profile.goal, trainingamount: Profile.trainingamount});
        const exercise = await Exercise.find({exName: Exercise.exName, rep: Exercise.reps, sets: Exercise.sets})
        const journal = await Journal.find({content: Journal.content, rating: Journal.rating})

        res.render( 'profiles/show', {title: 'Profile', profile, exercise, journal })
}
// req.user.id  64c70d0c682e6c73307263f5
