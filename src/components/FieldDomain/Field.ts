import { IField } from './IField';

class Field implements IField {
  name: string;
  label: string;
  type: string;
  rules: [];
  defaultValue: any;
  options: { value: string; text: string } [];

  constructor(name: string, label: string, type: string, rules: [] = [], defaultValue?: any, options: { value: string; text: string } [] = []) {
    this.name = name;
    this.label = label;
    this.type = type;
    this.rules = rules;
    this.defaultValue = defaultValue;
    this.options = options; 
  }
}

export default Field;
