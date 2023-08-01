const User = require('../models/user');
const Exercise = require('../models/excersie');
const Journal = require('../models/journal');


module.exports = {
    delete: deleteInjuryProfile,
    create,
    new: newProfile,
    show
}

async function deleteInjuryProfile (req, res, next) {
    try{
        //find the matching profile Id to the request
        const profileEL = await User.findOne({'injuryProfile._id': req.params.id});
        //guard so we dont delete the wrong profile
        if (!profileEL) {
            return res.redirect('/profiles')
        }
        //Injury Profile = array -> need to find profile correct index to remove
        const profileIndex = profileEL.injuryProfile.findIndex((profile) => profile._id.toString() === req.params.id); 
        //guard
        if (profileIndex === -1) {
            return res.redirect('/profiles');
        }
        profileEL.injuryProfile.splice(profileIndex, 1);

        await profileEL.save();
        res.redirect('/profiles')
    } catch (error) {
        next(error)
    }
}

async function create (req, res, next) {
    try{
        // finding correct user
        const user = await User.findById(req.user.id);
        //storing user input -> pushing into injury profile (array = push)
        const newProfile = req.body;
        user.injuryProfile.push(newProfile)

        //embededded = need to save user first 
        await user.save()
        res.redirect('/profiles')
    } catch (err) {
        next(error)
    }

}

async function newProfile (req, res) { 
    const injuryProfile = await User.findById(req.params.id);
    res.render('profiles/new', {title: 'Awesometitle', injuryProfile, } )
}


async function show (req, res, next) { 
    try{
        //passing user data to show page
            const user = await User.findById(req.user.id);
        //passing profile data (injury profile) to show
            const profile = await User.find({user: req.user.id, injury: user.injuryProfile.injury, goal: user.injuryProfile.goal, trainingamount: user.injuryProfile.trainingamount});;
        // passing exercise data to show 
            const exercise = await Exercise.find({exName: Exercise.exName, rep: Exercise.reps, sets: Exercise.sets})
        // need to remove this 
            const journal = await Journal.find({content: Journal.content, rating: Journal.rating})
    
            res.render( 'profiles/show', {title: 'Profile', profile, exercise, journal })
    } catch (err) {
        next(error)
    }
}

