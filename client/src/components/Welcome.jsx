import { Link, useNavigate } from 'react-router-dom'
import FlipText from "./magicui/flip-text";

const Home = () => {
  const navigate = useNavigate()

  const handleLogin = () => {
    navigate('/login')
  }

  
  return (
    <div className="wc-container">
      <div>
      <img src={'/bg.png'} width={400} style={{marginTop:'-40px',marginLeft:"auto",marginRight:"auto"}}/>
      <div className='title-container'>
        <div>Welcome.</div>
      </div>
      <FlipText
      className="flip-text"
      word="The only password manager you need !"
    />
        <button
          className='input-button'
          type="button"
          onClick={handleLogin}
          >Login</button>
        <div>Do not have an account ? <Link to="/signup">Register</Link></div>
          </div>
    </div>
  )
}

export default Home