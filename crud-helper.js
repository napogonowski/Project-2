require('dotenv').config();
require('./config/database');

const Exercise = require('./models/excersie')

let exercises = await Exercises.find({});
console.log(exercises)