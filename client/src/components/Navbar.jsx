import { Button } from "@mui/material";
import ShieldIcon from '@mui/icons-material/Shield';

function Navbar({onSearch}) {

  const handleInputChange = (event) => {
    onSearch(event.target.value);
  };

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
      <Button variant="contained" color="error">
        Log out
      </Button>
      </div>
    </div>
  )
}

export default Navbar
