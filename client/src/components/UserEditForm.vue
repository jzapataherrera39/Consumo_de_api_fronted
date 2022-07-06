<template>
  <div class="container">
    <!-- Añadir/quitar la clase "show" -->
    <div v-bind:class="modalClass" class="modal-container">
      <div class="user-modal">
        <h3 class="text-info">Editar Usuário</h3>
        <form>
          <div class="form-group">
            <label for="">Nombre</label>
            <input v-bind:value="user.name" required type="text" id="nameEdit" class="form-control"/>
          </div>
  
          <div class="form-group">
            <label for="">Email</label>
            <input v-bind:value="user.email" required type="email" id="emailEdit" class="form-control"/>
          </div>
          
          <div class="form-group">
            <label for="">Contraseña</label>
            <input v-bind:value="user.password" required type="password" id="passwordEdit" class="form-control"/>
          </div>

          <!-- al hacer clic, "showModal" se convierte en falso -->
          <button v-on:click.prevent="showModal = !showModal" class="btn btn-secondary mr-1">Fechar</button>
          <button v-on:click="updateUser(user._id)" type="submit" class="btn btn-primary">Salvar</button> 
        </form>
      </div>
    </div>

  </div>
</template>

<script>
import { EventBus } from '../main.js';

export default {
  name: 'UserEditForm',
  data() {
    return {
      users: [],
      user: '',
      showModal: false
    }
  },
  methods: {
    // Solicitud PUT para actualizar la información del usuario
    async updateUser(id) {
      await fetch(`http://localhost:3000/api/users/edit/${id}`, {
        method: 'PUT',
        headers: { 'Content-type': 'application/json' },
        body: JSON.stringify({ 
          name: document.getElementById('nameEdit').value,
          email: document.getElementById('emailEdit').value,
          password: document.getElementById('passwordEdit').value
        }),
      })
      .then((response) => response.json())
      .then((data) => {
        this.users = data;
        console.log('caiu aqui');
      })
      .catch((err) => {
        console.error(err);
      });
    }
  },
  // Al crear el componente, recibimos los datos emitidos por el 'EventBus' aquí en este componente
  created() {
    // evento de click
    EventBus.$on('click', (modal, user) => {
      this.showModal = !modal;
      this.user = user;
      console.log('showModal', this.showModal);
      console.log('modal', modal)
    })
  },
  // Función para poner o quitar la clase "show" en Modal
  computed: {
    modalClass() {
      return this.showModal ? 'show' : '';
    }
  }
  
};
</script>

<style>
/* Esto utiliza el mismo estilo que el modal de registro */
</style>
