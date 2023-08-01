const mongoose = require('mongoose');
const Schema = mongoose.Schema; 


const profileSchema = new Schema ({
    user: {
        type: Schema.Types.ObjectId,
        ref: "User"
    },
    injury: String,
    goal: String, 
    trainingamount: Number
});

module.exports = mongoose.model("Profile", profileSchema);