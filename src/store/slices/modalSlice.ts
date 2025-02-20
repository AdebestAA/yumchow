import { createSlice } from "@reduxjs/toolkit";

interface modalType {
    message:string,
    showModal:boolean,
    redirectPage:string | null,
    buttonText:string | null


}
const initialState :modalType = {
    message:"",
    showModal:false,
    redirectPage:null,
    buttonText:null
}
const modalSlice = createSlice({
    name:"modalSlice",
    initialState,
    reducers:{
        openModal:(state:modalType,actions:{payload:modalType,type:string})=>{

            return {message:actions.payload.message,showModal:true,redirectPage:actions.payload.redirectPage,buttonText:actions.payload.buttonText}
            
        },
       closeModal:()=>{
return {  
    message:"",
    showModal:false,
    redirectPage:null,
    buttonText:null}
       },
    }
})

export const {openModal,closeModal} = modalSlice.actions
const modalReducer = modalSlice.reducer
export default modalReducer