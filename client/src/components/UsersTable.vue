<template>
  <div class="container">
    <h3 class="mt-2 mb-3 float-left text-primary">Usuários</h3>
    <!-- Tabla de usuario -->
    <table class="table table-striped">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Usuario ID</th>
          <th scope="col">Nombre</th>
          <th scope="col">E-mail</th>
          <th scope="col">Contraseña</th>
          <th scope="col">Opciones</th>
        </tr>
      </thead>
      <tbody>
        <!-- Directiva "v-for" para obtener los usuarios de la API -->
        <tr v-for="(user, index) in users.users" :key="user._id" class="m-5">
          <th scope="row">{{ index + 1 }}</th>
          <td>{{ user._id }}</td>
          <td>{{ user.name }}</td>
          <td>{{ user.email }}</td>
          <td>{{ user.password }}</td>
          
          <td>
            <form>
              <button v-on:click.prevent="emitShowModal(user)" class="btn btn-sm btn-info mr-1">Editar</button>
              <button v-on:click="deleteUser(user._id)" type="submit" class="btn btn-sm btn-danger">Borrar</button>
            </form>
          </td>
        </tr>
        <!-- Fim "v-for" -->
      </tbody>
    </table>
    <!-- Tabla final -->
  </div>
</template>

<script>
import { EventBus } from '../main.js';

export default {
  name: 'UsersTable',
  data() {
    return {
      users: [],
      showModal: false
    }
  }, 
  // Al crear el componente, se realiza una petición GET a la API del backend

  async created() {
    await fetch('http://localhost:3000/api/users/')
    .then(response => response.json())
    .then(data => {
      this.users = data;
      console.log('caiu aqui');
    })
    .catch(err => {
      console.error(err);
    });
  },
  methods: {
    // Petición DELETE para eliminar el usuario
    async deleteUser(id) {
      await fetch(`http://localhost:3000/api/users/delete/${id}`, {
        method: 'DELETE'
      })
      .then((response) => response.json())
      .catch((err) => {
        console.error(err);
      });
    },
    // El método utiliza el 'EventBus' para poder emitir datos de forma global
    // --> Salen los datos "user" y "showModal"
    emitShowModal(user) {
      this.user = user;
      EventBus.$emit('click', this.showModal, this.user);
      
      console.log(this.user);
      console.log('UsersTable:', this.showModal);
    }
  }
}
</script>

<style scoped>
th {
  padding-left: 1.2rem;
}
</style>
