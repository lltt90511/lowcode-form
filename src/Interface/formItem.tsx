import { Property } from '@/../csstype/index';

export const enum FormType {
  TITLE = 'Title',
  LABEL = 'label',
  DIGIT = 'Digit',
  TEXT = 'Text',
  TEXTAREA = 'TextArea',
  SELECT = 'Select',
  RADIO = 'Radio',
  CHECKBOX = 'CheckBox'
}

export interface DefaultProps {
  type: FormType;
  id: string;
}

export interface TitleProps {
  text?: string; 
  textAlign?: Property.TextAlign;
  fontSize?: string;
}

export interface LabelProps {
  text?: string; 
}

export interface FormProps {
  name?: string;
  label?: string;
}

export interface SelectProps {
  valueNum?: Record<string, string>;
}

export type Props = DefaultProps & TitleProps & LabelProps & FormProps & SelectProps;