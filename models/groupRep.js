const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const groupRepSchema = new Schema({
  exerciseName: {
    type: String,
    required: true,
  },
  exerciseDescription: String,
  video: String,
  review: String,
  owner: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  rating: {
    type: Number,
    min: 1,
    max: 10,
    default: 5,
  },
});

module.exports = mongoose.model("groupRep", groupRepSchema);
