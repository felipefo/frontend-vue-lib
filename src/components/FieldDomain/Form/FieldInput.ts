// FieldInput.ts
import Field from '../Field';
import { IFieldInput } from './IFieldInput';

class FieldInput extends Field implements IFieldInput {
  placeholder: string;

  constructor(name: string, label: string, type: string, rules: [], defaultValue: any, options?: { value: string; text: string }[] , placeholder:  string = '') {
    super(name, label, type, rules, defaultValue, options);
    this.placeholder = placeholder;
  }

  static fromField(field: any, placeholder: string): FieldInput {
    return new FieldInput(field.name, field.label, field.type, field.rules, field.defaultValue, field.options, placeholder);
  }

}


export default FieldInput;
