import { TextField } from "@mui/material"
import { useState } from "react"

const Signup = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = () => {
    alert(email)
    alert(password)
    // You'll update this function later...
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
        </div>
    </div>
  )
}

export default Signup;