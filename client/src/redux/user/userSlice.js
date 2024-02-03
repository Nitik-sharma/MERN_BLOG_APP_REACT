import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentUser: null,
  error: null,
  loading: false,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    signInStart: (state) => {
      state.loading = true;
      state.error = null;
    },
    sigInSucess: (state, action) => {
      state.currentUser = action.payload;
      state.loading = false;
      state.error = null;
    },
    sigInFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});
export const { signInStart, sigInSucess, sigInFailure } = userSlice.actions;
export default userSlice.reducer;
