const mongoose = require('mongoose');
const Schema = mongoose.Schema; 

const logSchema = new Schema ({
    progress: Number
});


// The max reps needs to take the sum of all the reps entered by the user. 


module.exports = mongoose.model("Log", logSchema);