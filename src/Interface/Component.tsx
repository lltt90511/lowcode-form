export const enum ComponentType {
  TITLE = 'Title',
  LABEL = 'label',
  Digit = 'Digit',
  TEXT = 'Text',
  TEXTAREA = 'TextArea',
  SELECT = 'Select',
  RADIO = 'Radio',
  CHECKBOX = 'CheckBox'
}

export interface DefaultProps {
  type: ComponentType;
}

export interface TitleProps {
  text: string; 
}

export interface LabelProps {
  text: string; 
}

export interface FormProps {
  name: string;
  label?: string;
}

export interface SelectProps {
  valueNum?: Record<string, string>;
}