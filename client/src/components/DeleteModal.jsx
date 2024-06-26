import axios from "axios";
import toast, { Toaster } from 'react-hot-toast';

import { useDispatch } from "react-redux";
import { removeAccounts } from "../redux/accountsSlice";

function DeleteModal({handleDeleteToggler,accountID}) {
  const dispatch=useDispatch();

  const handleClose=()=>{
    handleDeleteToggler();
  }

  const handleSubmit=async()=>{
    try{
      const userid=localStorage.getItem('user-id')
      const token=localStorage.getItem('token')
      const accounts=await axios.delete(`https://password-vault-backend.onrender.com/${userid}/delete-account/${accountID}`,{headers:{token,userid}});
      dispatch(removeAccounts(accounts.data));
      const notify = () => toast("Account deleted successfully");
      notify()
    }catch(err){
      console.log(err)
      const notify = () => toast("Session expired. Login Again");
      notify()
    }
    handleClose()
  }
  return (
    <div className="delete-container">
      <div className="head2"><div>Are you sure you want to delete this ?</div></div>
      <hr/>
      <div className="btns">
        <button onClick={handleClose} id='cancel'>Cancel</button>
        <button onClick={handleSubmit}>Confirm</button>
      </div>
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

export default DeleteModal;
