<template>
  <div class="container">
    <!-- "showModal" se convierte en verdadero -->
    <button v-on:click="showModal = !showModal" class="btn btn-lg btn-outline-primary float-right">Registrar usuario</button>
    
   <!-- Añadir/quitar la clase "show" -->
    <div v-bind:class="modalClass" class="modal-container">
      <div class="user-modal">
        <h3 class="text-primary">Registro de usuario</h3>
        <form>
          <div class="form-group">
            <label for="name">Nombre</label>
            <input required value="" type="text" id="nameRegister" class="form-control"/>
          </div>
    
          <div class="form-group">
            <label for="email">Email</label>
            <input required value="" type="email" id="emailRegister" class="form-control"/>
          </div>
          
          <div class="form-group">
            <label for="password">Contraseña</label>
            <input required value="" type="password" id="passwordRegister" class="form-control"/>
          </div>
          
          <!-- al hacer clic, "showModal" se convierte en falso -->
          <button v-on:click.prevent="showModal = !showModal" class="btn btn-secondary mr-1">Cerrar</button>
          <button v-on:click="createUser()" type="submit" class="btn btn-primary">Guardar</button> 
        </form>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: 'UserRegisterForm',
  data() {
    return {
      users: [],
      showModal: false,
    };
  },
  methods: {
    // Solicitud POST para crear un nuevo usuario
    async createUser() {
      await fetch('http://localhost:3000/api/users/', {
        method: 'POST',
        headers: { 'Content-type': 'application/json' },
        body: JSON.stringify({
          name: document.getElementById('nameRegister').value,
          email: document.getElementById('emailRegister').value,
          password: document.getElementById('passwordRegister').value,
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
  // Función para poner o quitar la clase "show" en Modal
  computed: {
    modalClass() {
      return this.showModal ? 'show' : '';
    }
  }
};
</script>

<style>
.modal-container {
  position: fixed;
  background-color: rgba(0, 0, 0, 0.3);
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;

  display: flex;
  align-items: center;
  justify-content: center;
  
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.3s ease-in-out;
}

.modal-container.show {
  opacity: 1;
  pointer-events: auto;
}

.user-modal {
  color: #535353;
  background-color: #fff;
  background-image: url("../assets/background.jpg");
  width: 450px;
  padding: 40px 50px;
  max-width: 100%;
  border-radius: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
}

.user-modal h1 {
  margin: 0;
}

.user-modal p {
  opacity: 0.9;
}
</style>
