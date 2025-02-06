import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    isLoggedIn: !!localStorage.getItem('access_token'),
};

const authSlice = createSlice({
    name: 'auth',
    initialState: {
        isLoggedIn: !!localStorage.getItem('access_token'),
    },
    reducers: {
        setIsLoggedIn(state, action) {
            state.isLoggedIn = action.payload;
            if (action.payload) {
                localStorage.setItem('access_token', action.payload);
            } else {
                localStorage.removeItem('access_token');
            }
        },
    },
});

export const { setIsLoggedIn } = authSlice.actions;
export default authSlice.reducer; 
