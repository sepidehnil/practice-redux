import { createSlice } from "@reduxjs/toolkit";

const initialAuthState = { isAuthentication: false };

const authSlice = createSlice({
  name: "authentication",
  initialState: initialAuthState,
  reducers: {
    login(state) {
      state.isAuthentication = true;
    },
    logout(state) {
      state.isAuthentication = false;
    },
  },
});

export const authActions = authSlice.actions;
//for create type identifier we should use counterSlice.actions.toggle() this will return an object of this shape :{type :""}

export const authreducer = authSlice.reducer;
