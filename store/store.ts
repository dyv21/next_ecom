import { configureStore } from "@reduxjs/toolkit";
import { authReducer } from "@/redux/authSlice";

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export const store = configureStore({
  reducer: { auth: authReducer },
});
