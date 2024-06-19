import { useEffect, useState } from "react";
import Navbar from "./Navbar";
import CreateModal from "./CreateModal";
import { Button } from "@mui/material";
import AccountCard from "./AccountCard";
import axios from "axios";
import { useNavigate } from 'react-router-dom'
import toast, { Toaster } from 'react-hot-toast';
import { ShimmerThumbnail } from "react-shimmer-effects";

import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { setAccounts } from "../redux/accountsSlice";


function Home() {
    const [canCreate, setCanCreate] = useState(false);

    //redux part
    const accounts=useSelector(state=>state.accounts.acc)
    const dispatch=useDispatch();
    const [isLoading,setLoading]=useState(false);

    const [searchQuery, setSearchQuery] = useState("");
    const navigate = useNavigate()

    useEffect(()=>{
        async function getAccounts(){
            setLoading(true);
            try {
                const token=localStorage.getItem('token');
                const userID=localStorage.getItem('user-id');
                const res = await axios.get(`https://password-vault-backend.onrender.com/${userID}/accounts`,{headers:{token,userID}});
                dispatch(setAccounts(res.data))
            } catch (err) {
                console.error(err); // Handle errors
                const notify = () => toast("Session expired. Login Again");
                notify();
                setTimeout(()=>navigate('/login'),5000)
            }
            setLoading(false);
        }

        getAccounts();
    },[]);


    const handleSearch = (query) => {
        setSearchQuery(query);
    };
    const handleCreateToggler = () => {
        setCanCreate(canCreate => !canCreate);
    };
    
    const filteredAccounts = accounts?.filter(account =>
        account.accountName.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <div>
            <Navbar onSearch={handleSearch}/>
            <div id='head1'>
                <div id='head'>
                    <div>Accounts</div>
                    <Button variant="outlined" onClick={handleCreateToggler}>Create New</Button>
                </div>
                <hr />
            </div>
            {!isLoading &&
                <div className="cards">
                    {filteredAccounts?.map(account => (
                        <AccountCard account={account} key={account._id}/>
                    ))}
                </div>
            } 
            {isLoading && 
                <div className="cards">
                    <ShimmerThumbnail height={130} width={250} rounded className='account-card'/>
                    <ShimmerThumbnail height={130} width={250} rounded className='account-card'/>
                    <ShimmerThumbnail height={130} width={250} rounded className='account-card'/>
                    <ShimmerThumbnail height={130} width={250} rounded className='account-card'/>
                    <ShimmerThumbnail height={130} width={250} rounded className='account-card'/>
                    <ShimmerThumbnail height={130} width={250} rounded className='account-card'/>
                    <ShimmerThumbnail height={130} width={250} rounded className='account-card'/>
                    
                </div>
            }
            {canCreate && <CreateModal handleCreateToggler={handleCreateToggler}/>}
            <Toaster 
        toastOptions={{
            style: {
                padding: '8px',
            color: '#713200',
        background: '#fccccc'
    }
}}/>
        </div>
    );
}

export default Home;
