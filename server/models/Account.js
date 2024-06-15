const mongoose=require('mongoose');

const accountSchema=new mongoose.Schema({
    accountName: {
        type: String,
        required: true
    },
    accountPassword: {
        type: String,
        required: true
    },
    accountEmail:{
        type:String,
        required:true
    }
},{timestamps:true});

const Account=mongoose.model('account',accountSchema);

module.exports={Account,accountSchema}; 