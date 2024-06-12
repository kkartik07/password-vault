const mongoose=require('mongoose');
const {accountSchema}=require('./Account.js');

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
    accounts: {
        type:[accountSchema],
        default:[]
    }, 
},{timestamps:true});

const User=mongoose.model('user',userSchema);

module.exports=User; 