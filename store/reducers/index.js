import { createSlice } from '@reduxjs/toolkit';

const initialState = [];

const usersReducer = createSlice({
    name: "users",
    initialState: initialState,
    reducers: {
        add: (state, action) => {
            state = [...state, ...action.payload];
            return state;
        }
    }
})

export const { add: addUsers } = usersReducer.actions;

export default usersReducer.reducer;