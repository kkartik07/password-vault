const express = require('express');
const app = express();
const cors=require('cors');
const {createUser,login} = require('./controllers/User.js')
const { createAccount, editAccount, deleteAccount, getAccounts } = require('./controllers/Account.js');
const { isLoggedIn } = require('./middleware/index.js');


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
app.get('/:userID/accounts',isLoggedIn,getAccounts);
app.post('/:userID/new-account',isLoggedIn,createAccount);
app.put('/:userID/edit-account/:accountID', isLoggedIn,editAccount);
app.delete('/:userID/delete-account/:accountID',isLoggedIn,deleteAccount)

app.listen(PORT,()=>{
    console.log(`Server running on PORT:${PORT}`);
});