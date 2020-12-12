import { createSlice } from "@reduxjs/toolkit";
import { createSelector } from "reselect";

const slice = createSlice({
  name: "googleAuth",
  initialState: {
    isGoogleLogin:false,
    user:''
  },
  reducers: {
    //action => action handlers
    
    SetisGoogleLogined: (state, action) => {
      state.isGoogleLogin = action.payload.value;
    },
    setGoogleLoginedUser:(state,action) =>{
        state.user=action.payload.user;
    }
   
  },
});
export const selectisGoogleLogined = (state) => state.entities.googleAuth.isGoogleLogined;
export const GetGoogleLoginedUser = (state) => state.entities.googleAuth.user;

export const {
  SetisGoogleLogined,
  setGoogleLoginedUser
} = slice.actions;
export default slice.reducer;
