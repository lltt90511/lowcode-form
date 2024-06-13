'use client';

import React from "react";
import { Provider } from "react-redux";
import Home from "./Home";
import store from "@/store";

export default () => {
  return <React.StrictMode>
    <Provider store={store}>
      <Home />
    </Provider>
  </React.StrictMode>
}