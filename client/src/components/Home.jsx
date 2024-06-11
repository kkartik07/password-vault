import { useState } from "react";
import Navbar from "./Navbar";
import CreateModal from "./CreateModal";
import { Button } from "@mui/material";
import AccountCard from "./AccountCard";

function Home() {
    
    const [canCreate, setCanCreate] = useState(false);
    const [accounts, setAccounts] = useState([
        { name: "Facebook", password: "kartik123", email: 'kartik@gmail.com' },
        { name: "Faceb1ook", password: "kartik123", email: 'kartik@gmail.com' },
        { name: "Face2book", password: "kartik123", email: 'kartik@gmail.com' },
        { name: "Facebo5ok", password: "kartik123", email: 'kartik@gmail.com' },
        { name: "Fa35cebook", password: "kartik123", email: 'kartik@gmail.com' },
        { name: "Faceboo6k", password: "kartik123", email: 'kartik@gmail.com' },
        { name: "Faceb3ook", password: "kartik123", email: 'kartik@gmail.com' },
        { name: "Faceb8ook", password: "kartik123", email: 'kartik@gmail.com' },
        { name: "Fa32cebook", password: "kartik123", email: 'kartik@gmail.com' },
        { name: "Fac4ook", password: "kartik123", email: 'kartik@gmail.com' },
        { name: "Fac444ebook", password: "kartik123", email: 'kartik@gmail.com' },
        { name: "Gmail", password: "kfdfdf3", email: 'kartdddik@gmail.com' },
        // Add other accounts here...
    ]);

    const [searchQuery, setSearchQuery] = useState("");

    const handleSearch = (query) => {
        console.log(query)
        setSearchQuery(query);
    };
    const handleCreateToggler = () => {
        setCanCreate(canCreate => !canCreate);
    };
    
    

    const filteredAccounts = accounts.filter(account =>
        account.name.toLowerCase().includes(searchQuery.toLowerCase())
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
                    <AccountCard account={account} key={account.name}/>
                ))}
            </div>
            {canCreate && <CreateModal handleCreateToggler={handleCreateToggler} />}
        </div>
    );
}

export default Home;
