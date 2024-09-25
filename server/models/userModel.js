const mongoose=require('mongoose');
const userSchema=mongoose.Schema({
    name:String,
    email:String,
    password:String,
    avtar:String,
    posts:{
        type:Number,
        default:0
    }
    
})

const userModel= mongoose.model('users',userSchema);
module.exports={userModel};