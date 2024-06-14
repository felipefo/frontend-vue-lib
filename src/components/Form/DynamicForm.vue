<template>
  <form @submit.prevent="handleSubmit" class="container">
    <div class="row">
      <div
        v-for="(field, index) in fields"
        :key="index"
        :class="`col-md-${12 / inputsPerRow} mb-3`"
      >
        <div v-if="field.type === 'text'" class="input-text">
          <label :for="field.name" class="input-label col-form-label">{{ field.label }}</label>
          <input
            :placeholder="field.placeholder"
            :id="field.name"
            v-model="formData[field.name]"
            class="form-control"
          />
        </div>
        <div v-else-if="field.type === 'password'" class="input-text">
          <label :for="field.name" class="input-label col-form-label">{{ field.label }}</label>
          <input
            :placeholder="field.placeholder"
            :id="field.name"
            :type="field.type"
            v-model="formData[field.name]"
            class="form-control"
          />
        </div>
        <div v-else-if="field.type === 'select'" class="input-text">
          <label :for="field.name" class="input-label col-form-label">{{ field.label }}</label>
          <select :id="field.name" v-model="formData[field.name]" class="form-control">
            <option v-for="option in field.options" :key="option.value" :value="option.value">
              {{ option.text }}
            </option>
          </select>
        </div>
        <!-- Adicione mais blocos v-else-if conforme necessário para outros tipos de campos -->
        
        <span class="error-message" v-if="errors[field.name]">{{ errors[field.name] }}</span>
      </div>
    </div>
    <slot name="submit-button">
      <button type="submit" class="btn btn-primary">Enviar</button>
    </slot>
  </form>
</template>

<script>


export default {
  name: 'DynamicForm',
  props: {
    fields: {
      type: Array,
      required: true
    },
    inputsPerRow: {
      type: Number,
      required: true,
      default: 2
    }
  },
  data() {
    return {
      formData: {},
      errors: {}
    };
  },
  methods: {
    handleSubmit() {      

     // alert("Field:" +JSON.stringify(this.fields));
      for (const field of this.fields) {
        console.log(`Name: ${field.name}`);
        console.log(`Label: ${field.label}`);
        console.log(`Type: ${field.type}`);
        console.log(`Placeholder: ${field.placeholder}`);
        console.log(`DefaultValue: ${field.defaultValue}`);
        console.log(`Options: ${JSON.stringify(field.options)}`);
        console.log('-------------------');
      }
      this.validateForm();
      if (Object.keys(this.errors).length === 0) {
        this.$emit('form-submitted', this.formData);
      } else {
        alert('Por favor, corrija os erros no formulário.');
      }
    },
    validateForm() {
      this.errors = {};
      // Implemente a validação conforme necessário
    }
  }
};
</script>

<style scoped>
.input-text {
  margin-bottom: 1em;
}

.col-form-label {
  margin-right: 4px;
}

.error-message {
  color: #dc3545;
  font-size: 0.875rem;
  margin-top: 0.5em;
}
</style>
