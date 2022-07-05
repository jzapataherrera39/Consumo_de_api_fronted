const express = require('express');
const router = express.Router();

const { findUsers, insertUser, deleteUser, updateUser } = require('../../database/db');

// GET(read) usuarios (".../api/users")
router.get('/', async (req, res) => {
  await findUsers((err, users) => {
    if(err) {
      return console.log(err);
    }

    return res.send({ users });
  });
});

// POST(create) usuario
router.post('/', async (req, res) => {
  try {
    await insertUser({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
      createdAt: new Date()
    });
  
  
    return res.status(200).send({ success: 'Usuario creado'});
  } catch (error) {
    console.log(error);
    return res.status(400).send({ error: 'Error existente 404' });
  }
});

// PUT(update) usuario
router.put('/edit/:id', async (req, res) => {
  const name = req.body.name;
  const email = req.body.email;
  const password = req.body.password;

  try {
    await updateUser(req.params.id, { name, email, password });

    return res.status(200).send({ success: '¡Edición realizada con éxito!'});
  } catch (error) {
    console.log(error);
    return res.status(400).send({ error: 'Se ha producido un error en las modificaciones del usuario...' });
  }
});

// DELETE usuario
router.delete('/delete/:id', async (req, res) => {
  try {
    await deleteUser(req.params.id);

    return res.status(200).send({ success: '¡Usuario eliminado con éxito!'});
  } catch (error) {
    console.log(error);
    return res.status(400).send({ error: 'Se ha producido un error al borrar el usuario...' });
  }
});

module.exports = router;
