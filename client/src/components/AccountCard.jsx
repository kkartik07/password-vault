import { useEffect, useState } from 'react';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import EditModal from "./EditModal";
import DeleteModal from "./DeleteModal";
import { Button } from "@mui/material";

function AccountCard({ account }) {
    const [canEdit, setCanEdit] = useState(false);
    const [canDelete, setCanDelete] = useState(false);
    const [selectedAccount, setSelectedAccount] = useState(null);  // Track selected account
    const [visible,setVisible]=useState(false);
    const [hiddenPassword,setHiddenPassword]=useState("");

    useEffect(()=>{
        const passwordLength=account.accountPassword.length;
        let hidPassword="";
        for(let i=0;i<passwordLength;i++){
            hidPassword+='*'
        }
        setHiddenPassword(hidPassword);
    },[])

    const handleEditToggler = (account = null) => {
        setCanEdit(canEdit => !canEdit);
        setSelectedAccount(account);  // Set selected account for editing
    };

    const handleDeleteToggler = () => {
        setCanDelete(canDelete => !canDelete);
    };
    return (
        <>
            <div className="account-card">
                <b>{account.accountName}</b>
                <div style={{marginBottom:"4px"}}>{account.accountEmail}</div>
                <div id='g2'><div id='password'>{visible?<span style={{marginBottom:"4px"}}>{account.accountPassword}</span>:hiddenPassword}</div> <span onClick={()=>setVisible(visible=>!visible)}>{visible?<Visibility />:<VisibilityOffIcon/>}</span></div>
                <div id='btn-grp'>
                    <Button variant="contained" color="primary" onClick={() => handleEditToggler(account)}>Edit</Button>
                    <Button variant="contained" color="error" onClick={handleDeleteToggler}>Delete</Button>
                </div>
            </div>
            {canEdit && selectedAccount === account && (
                <EditModal
                    handleEditToggler={handleEditToggler}
                    details={{ name: account.accountName, password: account.accountPassword, email:account.accountEmail }}
                />
            )}
            {canDelete && <DeleteModal handleDeleteToggler={handleDeleteToggler} />}
        </>
    )
}

export default AccountCard
