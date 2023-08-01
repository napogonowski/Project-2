const mongoose = require('mongoose'); 
const Schema = mongoose.Schema; 

const exerciseSchema = new Schema ({
    user: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    exName: [{ type: String, required: true}],
    description: [{ type: String}],
    sets: [{ type: String, required: true}],
    reps: [{ type: String, required: true}], 
    video: [{ type: String}],
});

module.exports = mongoose.model('Exercise', exerciseSchema); 


// user id:64c70d0c682e6c73307263f5