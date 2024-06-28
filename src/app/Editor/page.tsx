'use client'

import { Provider } from "react-redux";
import store from "@/store";
import Main from "./Main";

export default () => {      
  return <Provider store={store}>
    <Main />
  </Provider>
}