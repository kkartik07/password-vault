const mongoose=require('mongoose');

const userSchema=new mongoose.Schema({
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true,
    },
    // rest of the schema to be added later after plan
},{timestamps:true});

const User=mongoose.model('user',userSchema);

module.exports=User; 