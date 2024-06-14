<template>
    <div>
      <DynamicTable :headers="tableHeaders" :data="tableData" />
    </div>
  </template>
  
  <script>
  import DynamicTable from '../Table/DynamicTable.vue';
  
  export default {
    components: {
      DynamicTable
    },
    data() {
      return {
        tableHeaders: [ //TODO: GENERALIZAR ESSE CODIGO PARA REUSAR OS COMPONENTS DO DOMINIO. 
          { name: 'Name', label: 'Nome da Tarefa', type: 'text', sortable: true },
          { name: 'Description', label: 'Descrição da Tarefa', type: 'text', sortable: true },
          { name: 'IsComplete', label: 'Status da Tarefa', type: 'select', options: [
            { value: 'Aberta', text: 'Aberta' },
            { value: 'Finalizada', text: 'Finalizada' }
          ], sortable: false }
        ],
        tableData: [
          { Name: 'Tarefa 1', Description: 'Descrição da Tarefa 1', IsComplete: 'Aberta' },
          { Name: 'Tarefa 2', Description: 'Descrição da Tarefa 2', IsComplete: 'Finalizada' },
          { Name: 'Tarefa 2', Description: 'Descrição da Tarefa 2', IsComplete: 'Finalizada' },
          { Name: 'Tarefa 2', Description: 'Descrição da Tarefa 2', IsComplete: 'Finalizada' },
          { Name: 'Tarefa 2', Description: 'Descrição da Tarefa 2', IsComplete: 'Finalizada' },
          { Name: 'Tarefa 2', Description: 'Descrição da Tarefa 2', IsComplete: 'Finalizada' }
        ]
      };
    }
  };
  </script>
  
  <style>
  /* Estilos opcionais para o componente pai */
  </style>
  