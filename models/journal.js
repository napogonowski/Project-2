const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const journalSchema = new Schema({
  userId: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  content: [
    {
      type: String,
      required: true,
    },
  ],
  date: {
    type: Date,
    default: Date.now,
  },
  rating: {
      type: Number,
      min: 1,
      max: 10,
      default: 5,
    },
  
});

module.exports = mongoose.model("Journal", journalSchema);
