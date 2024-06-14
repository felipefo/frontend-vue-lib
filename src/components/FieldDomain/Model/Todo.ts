import Field from '../Field';
import FieldInput from '../Form/FieldInput';
import { IFieldInput } from '../Form/IFieldInput';
import { IField } from '../IField';

const todo: Record<string, IField> = {//TODO: ADICIONAR REGRAS DE VALIDCAO: Ex. min, maximo, not null
  'Name': new Field('Name','Nome da Tarefa:','text',),
  'Description': new Field('Description','Descrição da Tarefa:','text'),
  'IsComplete': new Field('IsComplete','Status da Tarefa:','select', [],
    'Aberta',
    [
      { value: 'Aberta', text: 'Aberta' },
      { value: 'Finalizada', text: 'Finalizada' }
    ],
  )
};

const todoInput: IFieldInput[] = [
   FieldInput.fromField(todo['Name'],'Ex. Implementar novo recurso'),
   FieldInput.fromField(todo['Description'],'Detalhes da tarefa'),
   FieldInput.fromField(todo['IsComplete'], "Selecione um Status")
];

export default [todo, todoInput];