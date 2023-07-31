const User = require('../models/user')


module.exports = {
    show
}

async function show (req, res) { 
    try{
        const profile = await Profile.findOne({user: req.user.id})

        
    } catch (err) {}
}