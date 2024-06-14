import Field from '../Field';
import FieldInput from '../Form/FieldInput';
import { IFieldInput } from '../Form/IFieldInput';
import { IField } from '../IField';

const user: Record<string, IField> = {
  'username': new Field('username','Nome do Usuario:','text',),
  'password': new Field('password','Sua senha:','password')
};


const userInput: IFieldInput[] = [
  FieldInput.fromField(user['username'],'Ex. joao@gmail.com'),
  FieldInput.fromField(user['password'],'Ex. 12345')
];

export default [userInput];


