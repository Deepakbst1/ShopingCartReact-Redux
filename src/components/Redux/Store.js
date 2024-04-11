import { configureStore } from "@reduxjs/toolkit";
import toggleSlice from './Toggle'
import productSlice from './Products'
const store = configureStore({
reducer:{
toggle: toggleSlice,
products:productSlice
}
})

export default store;