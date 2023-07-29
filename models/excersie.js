const mongoose = require('mongoose'); 
const Schema = mongoose.Schema; 

const exerciseSchema = new Schema ({
    name: String,
    muscleGroup: String, 
    description: String, 
    sets: Number,
    reps: Number, 
    delete: Boolean,
    archieved: Boolean
})

module.exports = mongoose.model('Exercise', exerciseSchema); 