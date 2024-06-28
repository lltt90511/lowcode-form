import Digit from "@/app/Editor/Components/Digit";
import Title from "@/app/Editor/Components/Title";
import { FormItemData, FormType, UNKNOW } from "@/interface/formItem";

export const getItemByType = (type: FormType | UNKNOW) => {
  let formItem = null;
  switch(type) {
    case FormType.TITLE:
      formItem = Title;
      break;
    case FormType.LABEL:
      break;
    case FormType.TEXT:
      break;
    case FormType.TEXTAREA:
      break;
    case FormType.DIGIT:
      formItem = Digit;
      break;
    case FormType.RADIO:
      break;
    case FormType.CHECKBOX:
      break;
    case FormType.SELECT:
      break;
  }
  return formItem;
} 

export const getFormItemByData = (data: FormItemData) => {
  let formItem;
  const { type = FormType.LABEL, id = '', formProps = {} } = data;
  switch(type) {
    case FormType.TITLE:
      formItem = <Title.formItem key={id} {...formProps} />;
      break;
    case FormType.LABEL:
      break;
    case FormType.TEXT:
      break;
    case FormType.TEXTAREA:
      break;
    case FormType.DIGIT:
      formItem = <Digit.formItem key={id} {...formProps} />;
      break;
    case FormType.RADIO:
      break;
    case FormType.CHECKBOX:
      break;
    case FormType.SELECT:
      break;
  }
  return formItem;
}