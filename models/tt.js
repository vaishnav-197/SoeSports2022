// Requiring module
const mongoose = require('mongoose');
    
// Course Modal Schema
const ttTable = new mongoose.Schema({
    _id: Number,
    branch: String,
    matches: Number,
    points: Number,
    w: Number,
    l: Number,
    d: Number
});

module.exports = ttTable