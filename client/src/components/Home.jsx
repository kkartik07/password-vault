import { useEffect, useState } from "react";
import Navbar from "./Navbar";
import CreateModal from "./CreateModal";
import { Button } from "@mui/material";
import AccountCard from "./AccountCard";
import axios from "axios";
import { useNavigate } from 'react-router-dom'
import toast, { Toaster } from 'react-hot-toast';


function Home() {
    const [canCreate, setCanCreate] = useState(false);
    const [accounts, setAccounts] = useState([
        { accountName: "Facebook", accountPassword: "kartik123", accountEmail: 'kartik@gmail.com' },
        { accountName: "Faceb1ook", accountPassword: "kartik123", accountEmail: 'kartik@gmail.com' },
        { accountName: "Face2book", accountPassword: "kartik123", accountEmail: 'kartik@gmail.com' },
        { accountName: "Facebo5ok", accountPassword: "kartik123", accountEmail: 'kartik@gmail.com' },
        { accountName: "Fac4ook", accountPassword: "kartik123", accountEmail: 'kartik@gmail.com' },
        { accountName: "Fac444ebook", accountPassword: "kartik123", accountEmail: 'kartik@gmail.com' },
        { accountName: "Gmail", accountPassword: "kfdfdf3", accountEmail: 'kartdddik@gmail.com' },
        // use shimmer ui cards instead in future !!!!!!!!!!!!!!
    ]);

    const [searchQuery, setSearchQuery] = useState("");
    const navigate = useNavigate()

    useEffect(()=>{
        async function getAccounts(){
            try {
                const token=localStorage.getItem('token');
                const userID=localStorage.getItem('user-id');
                const res = await axios.get(`http://localhost:3001/${userID}/accounts`,{headers:{token,userID}});
                setAccounts(res.data);
            } catch (err) {
                console.error(err); // Handle errors
                const notify = () => toast("Session expired. Login Again");
                notify();
                setTimeout(()=>navigate('/login'),5000)
            }
        }
        getAccounts();
    },[])

    const handleSearch = (query) => {
        console.log(query)
        setSearchQuery(query);
    };
    const handleCreateToggler = () => {
        setCanCreate(canCreate => !canCreate);
    };
    
    const filteredAccounts = accounts.filter(account =>
        account.accountName.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <div>
            <Navbar onSearch={handleSearch}/>
            <div id='head1'>
                <div id='head'>
                    <div>Passwords</div>
                    <Button variant="outlined" onClick={handleCreateToggler}>Create New</Button>
                </div>
                <hr />
            </div>
            <div className="cards">
                {filteredAccounts.map(account => (
                    <AccountCard account={account} key={account.accountName}/>
                ))}
            </div>
            {canCreate && <CreateModal handleCreateToggler={handleCreateToggler} setAccounts={setAccounts}/>}
            <Toaster 
               toastOptions={{
                    style: {
                    padding: '12px',
                    color: '#713200',
                    background: '#fccccc'
                    },
              }}/>
        </div>
    );
}

export default Home;
