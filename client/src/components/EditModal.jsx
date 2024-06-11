import { useState } from "react";
import CloseIcon from '@mui/icons-material/Close';
import TextField from '@mui/material/TextField';

function EditModal({handleEditToggler,details}) {
    const [name,setName]=useState(details.name);
    const [email,setEmail]=useState(details.email);
    const [password,setPassword]=useState(details.password);

    const handleClose=()=>{
      handleEditToggler()
    }

    const handleSubmit=()=>{
      // edit logic here
      handleEditToggler();
    }
  return (
    <div className="modal-container">
      <div className="head2"><div>Edit</div><div><CloseIcon onClick={handleClose} className="close"/></div></div>
      <hr/>
      <div className="inps">
      <TextField className="inp1" label="Name" variant="outlined" value={name} defaultValue={name} onChange={e=>setName(e.target.value)} />
      <TextField className="inp1" label="Email" variant="outlined" value={email} defaultValue={email} onChange={e=>setEmail(e.target.value)} />
      <TextField className="inp1" label="Password" variant="outlined" value={password} defaultValue={password} onChange={e=>setPassword(e.target.value)} />
      </div>
      <button onClick={handleSubmit}>Submit</button>
    </div>
  )
}

export default EditModal
