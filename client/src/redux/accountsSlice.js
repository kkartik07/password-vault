import { createSlice } from '@reduxjs/toolkit'

const accountSlice=createSlice({
    name:'account',
    initialState:{
        acc:[]
    },
    reducers:{
        setAccounts:(state,action)=>{
            state.acc=action.payload
        },
        addAccounts:(state,action)=>{
            state.acc=action.payload
        },
        removeAccounts:(state,action)=>{
            state.acc=action.payload
        },
        editAccounts:(state,action)=>{
            state.acc=action.payload
        }
    }

})

export const {setAccounts,addAccounts,removeAccounts,editAccounts}=accountSlice.actions;

export default accountSlice.reducer