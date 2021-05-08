const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const UserSchema = new Schema({
    
    name: String,
    lastName:String,
    email:String,
    password: String
})



module.exports=mongoose.model('user', UserSchema);