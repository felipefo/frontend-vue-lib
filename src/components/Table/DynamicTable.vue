<template>
    <div>
      <table class="table">
        <thead>
          <tr>
            <th v-for="header in headers" :key="header.name">{{ header.label }}</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, index) in data" :key="index">
            <td v-for="header in headers" :key="header.name">{{ item[header.name] }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </template>
  
  <script>
  export default {
    name: 'DynamicTable',
    props: {
      headers: {
        type: Array,
        required: true
      },
      data: {
        type: Array,
        required: true
      }
    }
  };
  </script>
  
  <style scoped>
  /* Estilos podem ser ajustados conforme necessário */
  </style>
  