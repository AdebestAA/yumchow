import { configureStore } from "@reduxjs/toolkit";
import modalReducer from "./slices/modalSlice";
import homeMenuReducer from "./slices/homeMenuSlice";


const store = configureStore ( {
  reducer: {
    modalSlice:modalReducer,
    homeMenuSlice:homeMenuReducer
  }
})

export default store
export type RootState = ReturnType<typeof store.getState>
export type appDispatch = typeof store.dispatch