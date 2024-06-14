<template>
  <div>
    <h2>Login Page</h2>
    <DynamicForm :fields="userFields" :inputsPerRow="1" @form-submitted="handleFormSubmitted">
      <template v-slot:submit-button>
        <button type="submit" class="btn btn-primary">Login</button>
      </template>
    </DynamicForm>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import DynamicForm from '../Form/DynamicForm.vue';
import login from '../Usecase/LoginUseCase';
import FactoryDomain from '../FieldDomain/Model/FactoryDomain';



const userFields = FactoryDomain.getDomainModel('user');


export default defineComponent({
  name: 'LoginPage',
  components: {
    DynamicForm
  },
  data() {
    return {
      userFields
    };
  },
  methods: {
    handleFormSubmitted(formData: any) {
    
    //action.execute(form)
      login(formData).then(token => {
        alert('Logged in successfully, token:'+ token);
        console.log('Logged in successfully, token:', token);
    }).catch(error => {
        alert('Login failed:'+ error.message);
        console.error('Login failed:', error.message);
    });
    }
  }
});
</script>
