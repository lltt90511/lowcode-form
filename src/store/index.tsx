import { configureStore } from "@reduxjs/toolkit";
import formItemReducer, { FormState } from "./formItemReducer";

export type StateType = {
  formItems: FormState
};

export default configureStore({
  reducer: {
    formItems: formItemReducer
  },
});

