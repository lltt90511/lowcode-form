import { Property } from '@/../csstype/index';

export type UNKNOW = undefined | null | unknown;

export const enum FormType {
  TITLE = 'Title',
  LABEL = 'Label',
  DIGIT = 'Digit',
  TEXT = 'Text',
  TEXTAREA = 'TextArea',
  SELECT = 'Select',
  RADIO = 'Radio',
  CHECKBOX = 'CheckBox'
}

export type DefaultProps = {
  type: FormType;
  id: string;
}

export type TextProps = {
  text?: string; 
  textAlign?: Property.TextAlign;
  fontSize?: string;
}

export type FormProps = {
  name?: string;
  label?: string;
}

export type DigitProps = FormProps & {
  size?: string;
  max?: number;
  min?: number;
}

export type SelectProps = FormProps & {
  valueNum?: Record<string, string>;
}

export type Props = TextProps & DigitProps & SelectProps;

export type FormItemData = DefaultProps & {
  formProps?: Props
}