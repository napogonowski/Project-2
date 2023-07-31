const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const journalSchema = new Schema ({
    user: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    content: {
        type: String,
        required: true,
    },
    rating: {
        type: Number,
        min: 1,
        max: 10,
        default: 5
    },
    userName: String,
    userAvatar: String
});

module.exports = mongoose.model("Journal", journalSchema);