import { FormItemData } from "@/interface/formItem";
import { StateType } from "@/store";
import { useSelector } from "react-redux";

export default () => {
  const formList = useSelector<StateType>(
    state => state.formItems.formList
  ) as FormItemData[];
  
  return formList;
}