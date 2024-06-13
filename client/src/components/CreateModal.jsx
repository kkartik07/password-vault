import { useState } from "react";
import CloseIcon from '@mui/icons-material/Close';
import TextField from '@mui/material/TextField';
import { generateRandomPassword } from "../utils/password-generate";
import axios from "axios";
import toast, { Toaster } from 'react-hot-toast';



function CreateModal({handleCreateToggler,setAccounts}) {
  const [name,setName]=useState("");
  const [email,setEmail]=useState("");
  const [password,setPassword]=useState("");
  
  const handleClose=()=>{
    handleCreateToggler();
  }

    const handleSubmit=async()=>{
      try{
        const userid=localStorage.getItem('user-id')
        const token=localStorage.getItem('token')
        console.log(email)
        const accounts=await axios.post(`http://localhost:3001/${userid}/new-account`,{accountName:name,accountPassword:password,accountEmail:email},{headers:{token,userid}});
        setAccounts(accounts.data);
        const notify = () => toast("Account added successfully");
        notify()
      }catch(err){
        console.log(err)
        const notify = () => toast("Session expired. Login Again");
        notify()
      }
      handleClose()
    }
    
    const autoGeneratePassword=()=>{
      const autoPassword=generateRandomPassword(12);
      setPassword(autoPassword);
    }
    
  return (
    <div className="modal-container">
      <div className="head2"><div>Create New</div><div><CloseIcon onClick={handleClose} className="close"/></div></div>
      <hr/>
      <div className="inps">
      <TextField className="inp1" label="Name" variant="outlined" value={name} defaultValue={name} onChange={e=>setName(e.target.value)} />
      <TextField className="inp1" label="Email" variant="outlined" value={email} defaultValue={email} onChange={e=>setEmail(e.target.value)} />
      <div id='pwd'>
        <TextField className="inp1" label="Password" variant="outlined" value={password} defaultValue={password} onChange={e=>setPassword(e.target.value)} />
        <button onClick={autoGeneratePassword}>Auto Generate</button>
      </div>
      </div>
      <button onClick={handleSubmit}>Submit</button>
      <Toaster 
          toastOptions={{
              style: {
              padding: '12px',
              color: '#713200',
              background: '#fccccc'
              },
        }}/>
    </div>
  )
}

export default CreateModal
