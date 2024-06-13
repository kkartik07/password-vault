import { Link, useNavigate } from 'react-router-dom'

const Home = () => {
  const navigate = useNavigate()

  const handleLogin = () => {
    navigate('/login')
  }

  
  return (
    <div className="wc-container">
        <div>

      <div className='title-container'>
        <div>Welcome.</div>
      </div>
      <div>The only password manager you need !</div>
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