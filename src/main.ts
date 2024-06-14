import { createApp } from 'vue';
import App from './App.vue';
import { createRouter, createWebHistory } from 'vue-router';
import 'bootstrap/dist/css/bootstrap.min.css';

// Importe os componentes para as páginas de login e cadastro
import LoginPage from './components/Page/LoginPage.vue';
import TodoPage from './components/Page/TodoPage.vue';
import TodoListPage from './components/Page/TodoListPage.vue';

// Defina as rotas
const routes = [
  { path: '/todo', component: TodoPage },
  { path: '/login', component: LoginPage },
  { path: '/todolist', component: TodoListPage }
];

// Crie o roteador
const router = createRouter({
  history: createWebHistory(),
  routes
});

// Crie a aplicação Vue
const app = createApp(App);

// Use o roteador Vue
app.use(router);

// Monte a aplicação
app.mount('#app');

router.push('/login');
