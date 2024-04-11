import { createSlice } from "@reduxjs/toolkit";
//
const initialState = {
    toggleloading: false,
    togglefilter:false
};
const toggleSlice= createSlice({
name: "toggle",
initialState,
reducers:{
    toggleFilter(state,action){
     const value = action.payload;
     state[value] = !state[value]
    }
}

})
export const { toggleFilter } = toggleSlice.actions;
export default toggleSlice.reducer;