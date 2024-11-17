"use client";
import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "@/store/slices/counter-slice";
import React from "react";
import { Provider } from "react-redux";

const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export const ReduxProvider = ({ children }: { children: React.ReactNode }) => {
  return <Provider store={store}>{children}</Provider>;
};
