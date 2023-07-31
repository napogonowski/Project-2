const mongoose = require('mongoose'); 
const Schema = mongoose.Schema; 

const exerciseSchema = new Schema ({
    user: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    exName: String,
    description: String, 
    sets: Number,
    reps: Number, 
    video: String, 
    delete: Boolean,
    archieved: Boolean
});

module.exports = mongoose.model('Exercise', exerciseSchema); 


// user id:64c70d0c682e6c73307263f5