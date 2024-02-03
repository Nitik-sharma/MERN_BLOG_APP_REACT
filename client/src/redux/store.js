import { configureStore, combineReducers } from "@reduxjs/toolkit";
import userReducers from "../redux/user/userSlice";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import persistStore from "redux-persist/es/persistStore";

const rootReducers = combineReducers({
  user: userReducers,
});
const configPresist = {
  key: "root",
  storage,
  vaersion: 1,
};
const persistedReducer = persistReducer(configPresist, rootReducers);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware({
      serializableCheck: false,
    });
  },
});

export const persistor = persistStore(store);
