import { StateType } from "@/store";
import { useSelector } from "react-redux";

export default () => {
  const curSelectId = useSelector<StateType>(
    state => state.formItems.curSelectId
  ) as string; 
  return curSelectId;
}