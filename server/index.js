const express = require('express');
const app = express();
const cors=require('cors');
const {createUser,login} = require('./controllers/User.js')
const { createAccount, editAccount, deleteAccount } = require('./controllers/Account.js');


require('dotenv').config();

// connecting db (mongo)
const connectDB=require('./db.js');
connectDB(process.env.MONGO_URL);

//middlewares
app.use(cors());
app.use(express.json());


const PORT=process.env.PORT || 3001;

// user related routes
app.post('/signup',createUser);
app.post('/login',login);

// account related routes
app.post('/:userID/new-account',createAccount);
app.put('/:userID/edit-account/:accountID', editAccount);
app.delete('/:userID/delete-account/:accountID',deleteAccount)

app.listen(PORT,()=>{
    console.log(`Server running on PORT:${PORT}`);
});