import { useState } from "react";
import CloseIcon from '@mui/icons-material/Close';
import TextField from '@mui/material/TextField';
import { generateRandomPassword } from "../utils/password-generate";


function CreateModal({handleCreateToggler}) {
  const [name,setName]=useState("");
  const [email,setEmail]=useState("");
  const [password,setPassword]=useState("");
  
  const handleClose=()=>{
    handleCreateToggler();
  }

    const handleSubmit=()=>{
      // create logic here
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
    </div>
  )
}

export default CreateModal
