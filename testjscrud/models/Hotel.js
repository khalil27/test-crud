var mongoose = require('mongoose');
var Schema = mongoose.Schema
var Hotel= new Schema(
    {
        nom:String,
        fabricationDate:Date,
        nbrRooms:Number
    }
)
module.exports = mongoose.model('Hotels',Hotel)