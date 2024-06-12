const User=require('../models/User.js');
require('dotenv').config();
const bcrypt = require('bcrypt');
const saltRounds = 6;
const jwt = require('jsonwebtoken');
const SECRET=process.env.SECRET;


const createUser=async(req,res)=>{
    try{
        const userBody = req.body;
        const usercheck = await User.findOne({ email: userBody.email });
        if(usercheck){
            res.status(400).send("User already exists")
            return;
        }
        const hashedPwd = await bcrypt.hash(userBody.password, saltRounds);
        userBody.password = hashedPwd;
        const newUser = new User(userBody);
        await newUser.save();
        const token = jwt.sign({userId: newUser._id}, SECRET);
        res.json({ token ,_id:newUser._id});
    }
    catch(err){
        console.log(err)
    }
}


const login=async(req, res) => {
    const userBody = req.body;
    try {
        const user = await User.findOne({ email: userBody.email });
    
        if (!user) {
            res.status(401).send('User not found or incorrect username/password');
            return;
        }
        const match = await bcrypt.compare(userBody.password, user.password);
        if(!match){
            res.status(401).send('Incorrect username/password');
            return;
        }
        const token = jwt.sign({ email: user.email, userId: user._id }, SECRET);
        res.json({ token, _id: user._id });
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
}


module.exports={createUser,login}