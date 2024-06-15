import { useState } from "react";
import CloseIcon from '@mui/icons-material/Close';
import TextField from '@mui/material/TextField';
import axios from "axios";
import toast, { Toaster } from 'react-hot-toast';
import { generateRandomPassword } from "../utils/password-generate";


function EditModal({handleEditToggler,details,setAccounts}) {
    const [name,setName]=useState(details.name);
    const [email,setEmail]=useState(details.email);
    const [password,setPassword]=useState(details.password);

    const handleClose=()=>{
      handleEditToggler()
    }

    const autoGeneratePassword=()=>{
      const autoPassword=generateRandomPassword(12);
      setPassword(autoPassword);
    }

    const handleSubmit=async()=>{
      try{
        const userid=localStorage.getItem('user-id')
        const token=localStorage.getItem('token')
        const accounts=await axios.put(`https://password-vault-backend.onrender.com/${userid}/edit-account/${details.acc_id}`,{accountName:name,accountPassword:password,accountEmail:email},{headers:{token,userid}});
        setAccounts(accounts.data);
        const notify = () => toast("Account edited successfully");
        notify()
        }catch(err){
          console.log(err)
          const notify = () => toast("Session expired. Login Again");
          notify()
          }
        handleClose();
      }

  return (
    <div className="modal-container">
      <div className="head2"><div>Edit</div><div><CloseIcon onClick={handleClose} className="close"/></div></div>
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
            padding: '8px',
            color: '#713200',
            background: '#fccccc'
            },
      }}/>
    </div>
  )
}

export default EditModal
