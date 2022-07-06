// Conexión a la base de datos
const mongodb = require('mongodb').MongoClient;
const ObjectId = require('mongodb').ObjectID;

mongodb.connect('mongodb://localhost:27017', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(conn => {
  global.conn = conn.db('vuejs-crud');
  console.log("Conectado a MongoDB!");
}).catch((err) => {
  console.error('Error: La conexión ha fallado... ' + err);
});

/**
 * CRUD de usuarios
 */

// Retorna os documentos da collection 'users'
async function findUsers(callback) {
  return await global.conn.collection('users').find({}).toArray(callback);
}

// Insertar un nuevo usuario en la colección 'users'
async function insertUser(user, callback) {
  return await global.conn.collection('users').insertOne(user, callback);
}

// Actualizar/editar los datos del usuario en la colección 'users'
async function updateUser(id, user) {
  return await global.conn.collection('users').updateOne({_id: new ObjectId(id)}, {$set: user});
}

// Elimina un usuario de la colección 'users'.
async function deleteUser(id) {
  return await global.conn.collection('users').deleteOne({_id: new ObjectId(id)});
}

module.exports = { findUsers, insertUser, deleteUser, updateUser };
