import { createSlice } from "@reduxjs/toolkit";

import { FormItemData } from "../interface/formItem";

const enum StateType {
  NULL = 'null',
  ADD = 'add',
  REMOVE = 'remove',
  RESET = 'reset',
  CHANGE = 'change',
  HIDDEN = 'hidden',
  SELECT = 'select'
}

export interface FormState {
  type: StateType,
  curSelectId: string,
  formList: FormItemData[]
}

const initialState: FormState = {
  type: StateType.NULL,
  curSelectId: '',
  formList: []
}

const formItemsSlice = createSlice({
  name: "formItems",
  initialState,
  reducers: {
      // 添加
      addFormItem: (state: FormState, action) => {
        const index = state?.formList?.findIndex(c => c.id === state?.curSelectId);
        // index < 0 说明没有选中任何组件 直接插入到最后
        if (index < 0) {
          state?.formList?.push(action.payload)
        } else {
          state?.formList?.splice(index + 1, 0, action.payload);
        }
        state.curSelectId = action?.payload?.id;
      },
      // 删除
      removeFormItem: (state, action) => {
        const index = state?.formList?.findIndex(c => c.id === action?.payload?.id);
        if (index > -1) {
          state?.formList?.splice(index);
          state.curSelectId = '';
        }
      },
      // 选中 id为空则是取消选中
      selectFormItem: (state, action) => {
        state.curSelectId = action?.payload;
      },
      // 更新props
      updateFormItemProps: (state, action) => {
        const formItem = state?.formList?.find(c => c.id === state.curSelectId);
        if (!!formItem) {
          formItem.formProps = {
            ...formItem.formProps,
            ...action?.payload
          }
        }
      },
      // 重置
      resetForm: (state, action) => {
        state.formList = [];
        state.curSelectId = '';
      }
  },
});

export const {
  addFormItem,
  removeFormItem,
  selectFormItem,
  updateFormItemProps,
  resetForm
} = formItemsSlice.actions;

export default formItemsSlice.reducer;