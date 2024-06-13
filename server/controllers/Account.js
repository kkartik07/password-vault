const Account=require('../models/Account.js');
const User=require('../models/User.js');
require('dotenv').config();

const createAccount=async(req,res)=>{
    try{
        const userID = req.params.userID;
        const user = await User.findOne({ _id:userID });
        if(!user){
            res.status(400).send("User not found")
            return;
        }
        for(let i=0;i<user.accounts.length;i++){
            if(user.accounts[i].accountName===req.body.accountName){
                res.status(400).send("Account already exists")
                return;
            }
        }
        console.log(req.body.accountEmail)
        user.accounts.push({accountName:req.body.accountName, accountPassword:req.body.accountPassword,accountEmail:req.body.accountEmail });
        await user.save();
        res.status(201).json(user.accounts);
    }
    catch(err){
        console.log(err);
    }
}

const editAccount = async (req, res) => {
    try {
        const { userID, accountID } = req.params;
        
        // Find the user by ID
        const user = await User.findById(userID);
        if (!user) {
            return res.status(404).send("User not found");
        }

        // Find the account by ID within the user's accounts array
        const account = user.accounts.id(accountID);
        if (!account) {
            return res.status(404).send("Account not found");
        }

        // Update account fields
        if (req.body.accountName !== undefined) account.accountName = req.body.accountName;
        if (req.body.accountPassword !== undefined) account.accountPassword = req.body.accountPassword;
        if (req.body.accountEmail !== undefined) account.accountEmail = req.body.accountEmail;

        // Save the user document
        await user.save();

        res.status(200).send('Account updated successfully');
    } catch (error) {
        console.log(error);
        res.status(500).send('Error updating account');
    }
};

const deleteAccount= async (req, res) => {
    try {
        const { userID, accountID } = req.params;

        const user = await User.findById(userID);
        if (!user) {
            return res.status(404).send("User not found");
        }

        const account = user.accounts.id(accountID);
        if (!account) {
            return res.status(404).send("Account not found");
        }

        user.accounts.pull(accountID);
        await user.save();

        res.status(200).send('Account deleted successfully');
    } catch (error) {
        console.log(error);
        res.status(500).send('Error deleting account');
    }
};

const getAccounts=async(req,res)=>{
    const userID=req.params.userID;
    const user=await User.findOne({_id:userID});
    if(!user){
        res.status(401).send("User not found");
        return;
    }
    const accounts=user.accounts;
    res.status(200).json(accounts);
}


module.exports={createAccount, editAccount, deleteAccount,getAccounts};