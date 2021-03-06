// Importa express e cors como todos unos cracks
const express = require('express');
const app = express();
const cors = require('cors');

// Middleware para pasar un objeto a JSON Object (en una petición) como si se le solicitara a un maestro la nota
app.use(express.json());
// Middleware para permitir el acceso a la API desde un dominio diferente (En este caso, nuestro cliente: localhost:8080)
app.use(cors());

// La aplicación utilizará la ruta "/api/users" como coincidencia
// Ejemplo: "/api/users/abc123", 
const usersRouter = require('./routes/api/users');
app.use('/api/users', usersRouter);

// Começa a rodar servidor
const port = process.env.PORT || 3000;
app.listen(port);
console.log(`Servidor que funciona en el puerto ${port}`);

