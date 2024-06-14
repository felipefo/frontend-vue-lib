  
  export interface IField {
    name: string;
    label: string;
    type: string;
    rules: any [];
    defaultValue: any;
    options: { value: string; text: string }[];
  }
  