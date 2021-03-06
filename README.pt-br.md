# VUE.JS CRUD

CRUD de usuario utilizando Vue.js en el front-end y Node.js con MongoDB en el back-end.

*馃寧 [ingl茅s](README.md),(README.en-br.md)*
<hr/>
<img src="./client/src/assets/homepage.png" />
<details>
  <summary>Modal <sub><sup>(click here)</sup></sub></summary>
<pre>
<img src="./client/src/assets/modal_cadastro.png" />
<img src="./client/src/assets/modal_editar.png" />
</pre>
</details>


## Instalaci贸n

Necesitas tener instalado [**MongoDB**](https://www.mongodb.com/try/download/community "**MongoDB**") y [**Node.js**](https://nodejs.org/en/download/ "**Node.js**") en tu m谩quina.

``bash
# Clonar el repositorio
$ git clone https://github.com/jzapataherrera39/Consumo_de_api_fronted
# Entra en la carpeta del proyecto
$ cd Consumo_de_api_fronted
# Instalar las dependencias del proyecto
$ npm install
# Cambiar a la carpeta de front-end
$ cd cliente
# Instalar las dependencias del front-end
$ npm install
# Ejecutar el front-end
$ npm run serve
# Vuelve a la ra铆z del proyecto (vuejs-crud)
$ cd ...
# Ejecutar el back-end
$ npm run dev
```

Ahora tenemos el front-end corriendo en el puerto 3000, y la API REST en el puerto 8080.


## Funcionalidades

- Registrar nuevos usuarios con nombre, correo electr贸nico y contrase帽a; **(CREAR)**
- Enumerar todos los usuarios de la aplicaci贸n en una tabla en la p谩gina de inicio, una tabla con la siguiente informaci贸n: **(LEER)
  - ID de usuario (ObjectId 煤nico del usuario en MongoDB)
  - Nombre;
  - Correo electr贸nico;
  - Contrase帽a;
- Editar la informaci贸n de un usuario ya registrado; **(UPDATE)**
- Eliminar un usuario de la aplicaci贸n; **(DELETE)**

## C贸mo funciona

En este proyecto, la divisi贸n entre el front-end y el back-end est谩 hecha, de manera que ambos comienzan en diferentes direcciones/puertos.

### REST API

En el back-end, es donde tenemos nuestra API y base de datos, desarrollada en Node.js y MongoDB, corriendo en el puerto 3000. Todas las rutas *GET*, *POST*, *PUT* y *DELETE* se encuentran en el directorio `server>routes>api>users.js`, corresponden a la ruta http `/api/users` de la aplicaci贸n (http://localhost:3000/api/users). La conexi贸n a la base de datos se realiza en el directorio `servidor>base de datos>db.js`, en este archivo tambi茅n tenemos las funciones CRUD que se exportan para ser utilizadas en las rutas de la API.

> La aplicaci贸n Postman se utiliz贸 para probar el env铆o y la recepci贸n de datos, mediante peticiones HTTP, a la API. La colecci贸n con todas las peticiones est谩 en el directorio `>servidor>postman>vuejs-crud.postman_collection.json`, por si quieres probarlo en tu Postman.


### Front-end

El front-end, nuestro "cliente", fue desarrollado 铆ntegramente con Vue.js - framework de JavaScript - que se ejecuta en el puerto 8080 (http://localhost:8080). El proyecto se construy贸 con el cliente oficial de Vue.js, el Vue CLI, facilitando la configuraci贸n y generaci贸n de la aplicaci贸n Vue.js; opci贸n elegida por ser un entorno m谩s profesional, seg煤n la investigaci贸n, pero tambi茅n se estudi贸 el uso de Vue.js con la inclusi贸n directa de la etiqueta `<script>`. 

Esta aplicaci贸n Vue, est谩 compuesta por 4 componentes:

- `<Header />`: Cabecera con t铆tulo y "panel de navegaci贸n" de la aplicaci贸n;
- `<UserRegisterForm />`: Modal con el formulario para registrar un nuevo usuario;
- `<UserEditForm />`: Modal con el formulario para editar y enviar los cambios del usuario;
- `<UsersTable />`: Tabla con toda la lista de usuarios registrados en el sistema.

Todos estos componentes se renderizan en `App.vue`, la ra铆z de la aplicaci贸n. Define la plantilla de nuestra p谩gina, a帽adiendo los componentes en la etiqueta `<template>`.
Las peticiones, a la API del back-end, se hacen todas usando la propia API Fetch de JavaScript, el CRUD se pone en marcha con ella. Las peticiones *GET* y *DELETE* se realizan en el componente `<UsersTable />`, *POST* en el modal `<UserRegisterForm />`, y la petici贸n *PUT* se realiza en el modal `<UserEditForm />`.

El framework Bootstrap, se utiliz贸 para hacer la capacidad de respuesta y el estilo de algunos elementos de la aplicaci贸n. Los modales de registro y edici贸n, fueron estilizados con CSS puro.


## Tecnolog铆as

A continuaci贸n se detallan las tecnolog铆as y dependencias utilizadas en el desarrollo del proyecto.

- [**Vue.js:**](https://vuejs.org/ "**Vue.js:**") Framework JavaScript Progressivo, usado para desenvolver interfaces de usu谩rio din芒micas com HMTL, CSS e JS.
- [**Bootstrap:**](https://getbootstrap.com/docs/4.5/getting-started/introduction/ "**Bootstrap:**") Framework front-end com uma grande cole莽茫o de c贸digos CSS, foi usado no projeto para fazer a estiliza莽茫o e responsividade.
- [**Node.js:**](https://nodejs.org/en/docs/ "**Node.js:**") Ambiente JavaScript no lado do servidor, o back-end do projeto foi todo desenvolvido em Node.js.
- [**Express:**](https://github.com/expressjs/express "**Express:**") Framework do Node.js, facilita a cria莽茫o de aplica莽玫es web com configura莽玫es de rotas, middlewares e outras fun莽玫es;
- [**Cors:**](https://www.npmjs.com/package/cors "**Cors:**") Pacote Node.js para habilitar o CORS - "Cross-Origin Resource Sharing" - na aplica莽茫o. No caso, requisi莽玫es para outro dom铆nio - localhost:3000 (nossa API).
- [**MongoDB:**](https://docs.mongodb.com/ "**MongoDB:**") Banco de dados NoSQL utilizado no projeto.
- [**Nodemon:**](https://github.com/remy/nodemon "**Nodemon:**") Usado para auxiliar no desenvolvimento, sempre atualizando a p谩gina web quando houver mudan莽as nos arquivos;

###### :D
