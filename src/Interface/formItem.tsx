import { Property } from '@/../csstype/index';

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

export type TitleProps = {
  text?: string; 
  textAlign?: Property.TextAlign;
  fontSize?: string;
}

export type LabelProps = {
  text?: string; 
}

export type FormProps = {
  name?: string;
  label?: string;
}

export type DigitProps = {
  fontSize?: string;
}

export type SelectProps = {
  valueNum?: Record<string, string>;
}

export type Props = TitleProps & LabelProps & FormProps & DigitProps & SelectProps;

export type FormItemData = {
  type: FormType,
  id: string,
  defaultProps?: Props
}