<template>
    <div>
      <DynamicForm :fields="formFields" @form-submitted="handleFormSubmit" />
    </div>
  </template>
  
  <script>
  import DynamicForm from '../Form/DynamicForm';
  import FieldInput from '../FieldDomain/Form/FieldInput'; // Certifique-se de importar FieldInput
  
  export default {
    components: {
      DynamicForm
    },
    data() {
      return {
        formFields: [
          new FieldInput('username', 'Nome do Usuário:', 'text', { required: true, min: 3 }, '', [], 'Ex. joseoliveira'),
          new FieldInput('password', 'Senha:', 'password', { required: true, min: 3 }, '', [], 'Ex. password')
        ]
      };
    },
    methods: {
      handleFormSubmit(formData) {
        console.log('Formulário submetido com sucesso:', formData);
        // Lógica para lidar com os dados do formulário submetido
      }
    }
  };
  </script>
  