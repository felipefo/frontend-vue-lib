<template>
    <div id="app" class="container">
      
      <nav>
        <ul>
          <li><RouterLink to="login">Login</RouterLink></li>
          <li><RouterLink to="todo">Cadastro de Atividades</RouterLink></li>
          <li><RouterLink to="todolist">Lista de Atividades</RouterLink></li>
        </ul>
      </nav>
      <div class="content">
        <router-view></router-view>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'App'



   
  }
  </script>
  
  <style>
  /* Estilos para o menu lateral */
  nav {
    width: 200px;
    height: 100vh; /* Altura total da página */
    position: fixed; /* Mantém o menu fixo */
    background-color: #f0f0f0;
    padding: 20px;
  }
  
  nav ul {
    list-style-type: none;
    padding: 0;
  }
  
  nav ul li {
    margin-bottom: 10px;
  }
  
  nav ul li a {
    text-decoration: none;
    color: #333;
  }
  
  nav ul li a:hover {
    color: blue;
  }
  
  /* Estilos para o conteúdo ao lado do menu */
  .content {
    margin-left: 220px; /* Margem para deixar espaço para o menu */
    padding: 20px;
  }
  </style>
  