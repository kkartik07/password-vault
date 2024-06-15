import { Button } from "@mui/material";
import ShieldIcon from '@mui/icons-material/Shield';
import { useNavigate } from 'react-router-dom'

function Navbar({onSearch}) {

  const navigate = useNavigate();

  const handleInputChange = (event) => {
    onSearch(event.target.value);
  };

  const handleLogout=()=>{
    localStorage.removeItem('user-id')
    localStorage.removeItem('token')
    navigate('/login')
  }

  return (
    <div id='nav'>
      <div id="logo">Password Vault <ShieldIcon /></div>
      <div id='g1'>
      <div id="search">
        <input type='text' 
          placeholder="Search by name" 
          onChange={handleInputChange}
        />
      </div>
      <Button variant="contained" color="error" onClick={handleLogout}>
        Log out
      </Button>
      </div>
    </div>
  )
}

export default Navbar
