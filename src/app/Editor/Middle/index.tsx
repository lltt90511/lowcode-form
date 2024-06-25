import { FormItemData } from "@/interface/formItem";
import { StateType } from "@/store";
import { getItemByType } from "@/utils/utils";
import { useSelector } from "react-redux";

export default () => {
  const formList = useSelector<StateType>(
    state => state.formItems.formList
  ) as FormItemData[];
  console.log('--->', formList)
  return <div>
    {
      formList?.map((form) => {
        const item = getItemByType(form.type);
        const FormItem = item.formItem;
        return <div key={form.id}>
          <FormItem {...form.defaultProps || {}}/>
        </div>
      })
    }
  </div>
}