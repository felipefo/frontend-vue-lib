// TableField.ts
import Field from '../Field';
import { ITableField } from './ITableField';

class TableField extends Field implements ITableField {
  sortable: boolean;

  constructor(name: string, label: string, type: string, rules: [], defaultValue: any, options?: [] , sortable: boolean = false) {
    super(name, label, type, rules, defaultValue, options);
    this.sortable = sortable;
  }

  static fromField(field: any, sortable: boolean): TableField {
    return new TableField(field.name, field.label, field.type, field.rules, field.defaultValue, field.options, sortable);
  }

}

export default TableField;
