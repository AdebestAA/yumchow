import { configureStore } from "@reduxjs/toolkit";
import modalReducer from "./slices/modalSlice";


const store = configureStore ( {
  reducer: {
    modalSlice:modalReducer
  }
})

export default store
export type RootState = ReturnType<typeof store.getState>
export type appDispatch = typeof store.dispatch