import { App } from 'vue';
import DynamicForm from '@/components/Form/DynamicForm.vue';
import LoginPage from '@/components/Page/LoginPage.vue';
import TodoPage from '@/components/Page/TodoPage.vue';
import TodoListPage from '@/components/Page/TodoListPage.vue';
import DynamicTable from '@/components/Table/DynamicTable.vue';


export default {
  install: (app: App) => {
    app.component('DynamicForm', DynamicForm);
    app.component('DynamicTable', DynamicTable);
    app.component('LoginPage', LoginPage);
    app.component('TodoListPage', TodoListPage);
    app.component('TodoPage', TodoPage);

  

    
  },
};
