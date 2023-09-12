import { createSlice } from '@reduxjs/toolkit';

const loginSlice = createSlice({
    name: 'login',
    initialState: {
        user: {
            id: null,
            name: "",
            email: "",
            token: ""
          }
    },
    reducers: {
        setLogin: (state, action) => {
            state.user = action.payload;
        }
    }
});

export const { setLogin } = loginSlice.actions;
export default loginSlice.reducer;