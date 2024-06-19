import { configureStore } from '@reduxjs/toolkit';

import accountSliceReducer from './accountsSlice';

const store=configureStore({
    reducer: {
        accounts: accountSliceReducer
    }
})

export default store;