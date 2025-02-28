import { createSlice } from "@reduxjs/toolkit";


const homeMenuSlice = createSlice({
    name:"homeMenuSlice",
    initialState:false,
    reducers: {
        openMenu: ()=>{
            return true
        },
        closeMenu:()=>{
            return false
        }
    }
})

export const {openMenu, closeMenu} = homeMenuSlice.actions
const homeMenuReducer = homeMenuSlice.reducer

export default homeMenuReducer