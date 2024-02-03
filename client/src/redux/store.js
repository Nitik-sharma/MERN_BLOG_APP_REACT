import { configureStore } from "@reduxjs/toolkit";
import userReducers from "../redux/user/userSlice";
export const store = configureStore({
  reducer: {
    user: userReducers,
  },
});
