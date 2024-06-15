require('dotenv').config();
const jwt=require('jsonwebtoken')
const SECRET=process.env.SECRET;

const isLoggedIn=async(req,res,next)=>{
    const token=req.headers.token;
    const userID=req.headers.userid;
    if (!token) {
        return res.status(401).send('Access denied. No token provided.');
    }
    try {
        const decoded = jwt.verify(token, SECRET);
        if(userID === decoded.userId){
            next();
        } else{
            res.status(403).json({message:"User does not match"});
        }
        
    } catch (error) {
        res.status(403).json({message:'Invalid token'});
    }
}

module.exports={isLoggedIn}