import { createSlice } from "@reduxjs/toolkit";

const initialState =[];
const productSlice = createSlice({
name:"products",
initialState,
reducers:{
    addproducts(state,action){
     return action.payload
    },
    filterproducts(state, action) {
       return action.payload
      }
}
})
export const {addproducts,filterproducts} = productSlice.actions;
export default productSlice.reducer;