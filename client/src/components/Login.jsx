import { TextField } from "@mui/material"
import axios from "axios"
import { Link, useNavigate } from 'react-router-dom'
import { useState } from "react"
import toast, { Toaster } from 'react-hot-toast';

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const navigate = useNavigate();

  //login
  const handleSubmit = async(event) => {
    event.preventDefault();
    
    try {
        const res = await axios.post('http://localhost:3001/login', { email, password });
        localStorage.setItem('token',res.data.token)
        localStorage.setItem('user-id',res.data._id)
        navigate('/home')
    } catch (err) {
        console.error(err); // Handle errors
        const notify = () => toast("Incorrect Email or Password");
        notify();
    }
  }

  return (
    <div className="login">
        <div className='main-container'>
            <div className='title-container'>
                <div>Login</div>
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
            <div style={{marginTop:'10px'}}>Do not have an account ? <Link to="/signup">Register</Link></div>

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

export default Login