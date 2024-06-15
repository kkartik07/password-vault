import { TextField } from "@mui/material"
import { useState } from "react"
import axios from "axios"
import { useNavigate } from 'react-router-dom'
import toast, { Toaster } from 'react-hot-toast';

const Signup = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const navigate = useNavigate()

  const handleSubmit = async (event) => {
    event.preventDefault();
    
    try {
        const res = await axios.post('https://password-vault-backend.onrender.com/signup', { email, password });
        localStorage.setItem('token',res.data.token)
        localStorage.setItem('user-id',res.data._id)
        navigate('/home')
    } catch (err) {
        console.error(err); // Handle errors
        const notify = () => toast("Try again");
        notify();
    }
  }

  return (
    <div className="login">
        <div className='main-container'>
            <div className='title-container'>
                <div>Signup</div>
            </div>
            <br />
            <div className='input-container'>
                <TextField className="input-box"
                    label="Email"
                    variant="outlined"
                    value={email}
                    placeholder="Enter your email here"
                    onChange={(ev) => setEmail(ev.target.value)}
                />
            </div>
            <br />
            <div className='input-container'>
                <TextField className="input-box"
                    label="Password"
                    variant="outlined"
                    value={password}
                    placeholder="Enter your password here"
                    onChange={(ev) => setPassword(ev.target.value)}
                    type="password"
                />
            </div>
            <hr/>
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
    </div>
  )
}

export default Signup;