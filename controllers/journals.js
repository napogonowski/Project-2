const User = require('../models/user');
const Exercise = require('../models/excersie');
const Journal = require('../models/journal');


module.exports = {
    delete: deleteJournal,
    create, 
    new: newJournal,
    index,
    show,
    update
}

async function update (req, res, next){
    try{
        
    } catch(error) {
        next(error)
    }
}


async function deleteJournal (req, res, next ) {
    try{} catch(error){
        next(error)
    }
}
async function create (req, res, next ) {
    try{} catch(error){
        next(error)
    }
}
async function newJournal (req, res, next ) {
    try{} catch(error){
        next(error)
    }
}
async function index (req, res, next ) {
    try{} catch(error){
        next(error)
    }
}
async function show (req, res, next ) {
    try{} catch(error){
        next(error)
    }
}