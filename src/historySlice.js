import {createSlice} from "@reduxjs/toolkit";
import history from "./components/History";

export const historySlice = createSlice({
    name: 'history',
    initialState: {
        value: [],
    },
    reducers: {
        updateHistory: (state, action) => {
             state.value.push(action.payload)
        },
    },
})

export const {updateHistory} = historySlice.actions;
export const historyState = (state) => state.history.value;

export default historySlice.reducer;