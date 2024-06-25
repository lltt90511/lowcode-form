import MiddleItem from "@/components/MiddleItem";
import useFormList from "@/hooks/useFormList";
import { getItemByType } from "@/utils/utils";

export default () => {
  const formList = useFormList();
  return <div>
    {
      formList?.map((form) => {
        const item = getItemByType(form.type);
        return item && <MiddleItem
          key={form.id}
          type = {item.type}
          id = {form.id}
          formProps = {form.formProps}
          FormItem = {item.formItem}
        />
      })
    }
  </div>
}