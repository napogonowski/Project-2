const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const exerciseSchema = new Schema({
  exName: { type: String, required: true },
  description: { type: String },
  sets: { type: String, required: true },
  reps: { type: String, required: true },
  video: { type: String },
  userId: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
});

module.exports = mongoose.model("Exercise", exerciseSchema);
