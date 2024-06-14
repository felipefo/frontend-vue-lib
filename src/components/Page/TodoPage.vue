<template>
    <div>
      <h2>Cadastro de Atividades</h2>
      <DynamicForm :fields="todoFields" :inputsPerRow="2" @form-submitted="handleFormSubmitted">
        <template v-slot:submit-button>
          <button type="submit" class="btn btn-primary">Cadastrar Tarefa</button>
        </template>
      </DynamicForm>
    </div>
  </template>
  
  <script lang="ts">
  import { defineComponent } from 'vue';
  import DynamicForm from '../Form/DynamicForm.vue';
  import FactoryDomain from '../FieldDomain/Model/FactoryDomain';
  import GenericUseCaseFactory from '../Usecase/GenericUseCaseFactory';

  const todoFields = FactoryDomain.getDomainModel('todo');

  export default defineComponent({
    name: 'TodoPage',
    components: {
      DynamicForm
    },
    data() {
      return {
        todoFields
      };
    },
    methods: {
      handleFormSubmitted(formData: any) {
        const todoUseCase  = GenericUseCaseFactory.createUseCase("todoitems");
        todoUseCase(formData);
      }
    }
  });
  </script>
  