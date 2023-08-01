const mongoose = require('mongoose');
const Schema = mongoose.Schema; 


const injuryProfileSchema = new Schema ({
  injury:[{ 
    type: String, 
    required: true
  }],
    goal:[{
        type: String
      }],
    trainingamount: 
    [{
        type: Number, 
        required: true
    }],
  }, {
    timestamps: true
  })


const userSchema = new Schema ({
  name: String,
  googleId: {
    type: String,
    required: true
  },
  email: String,
  avatar: String,
  injuryProfile: [injuryProfileSchema], 
}, {
    timestamps: true
}); 

module.exports = mongoose.model('User', userSchema); 