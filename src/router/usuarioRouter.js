const router = require("express").Router();
const { faker } = require("@faker-js/faker");

const usuario = require("../models/usuarioModel");

// Rutas de usuario
// 1) GET todos los usuarios
router.get("/usuario", async (req, res) => {
  const usuarios = await usuario.findAll();
  res.status(200).json({
    ok: true,
    status: 200,
    body: usuarios,
  });
});
// 2) GET usuario por id
router.get("/usuario/:id", async (req, res) => {
  const id = req.params.id;
  const Usuario = await usuario.findOne({
    where: {
      id: id, // El id viene de la tabla y toma el valor de la constante id que se declaró arriba
    },
  });
  res.status(200).json({
    ok: true,
    status: 200,
    body: Usuario,
  });
});
// 3) POST crear usuario
router.post("/usuario", async (req, res) => {
  await usuario.sync();
  const usuarioData = req.body;
  const usuarioCrear = await usuario.create({
    nombre: usuarioData.nombre,
    apellido: usuarioData.apellido,
    email: usuarioData.email,
    password: usuarioData.password,
    telefono: usuarioData.telefono,
    tipoUsuario: "usuario",

    /* Se usa el faker para crear datos falsos
    nombre: faker.person.firstName(),
    apellido: faker.person.lastName(),
    email: faker.internet.email(),
    password: faker.internet.password(),
    telefono: faker.phone.number(),
    tipoUsuario: "usuario", */
  });
  res.status(201).json({
    ok: true,
    status: 201,
    message: "Usuario creado",
  });
});
// 4) PUT actualizar usuario
router.put("/usuario/:id", async (req, res) => {
  const id = req.params.id;
  const usuarioData = req.body;
  const updateUsuario = await usuario.update(
    {
      nombre: usuarioData.nombre,
      apellido: usuarioData.apellido,
      email: usuarioData.email,
      password: usuarioData.password,
      telefono: usuarioData.telefono,
      tipoUsuario: "usuario",
    },
    {
      where: {
        id: id,
      },
    }
  );
  res.status(200).json({
    ok: true,
    status: 200,
    body: updateUsuario,
  });
});
// 5) DELETE eliminar usuario
router.delete("/usuario/:id", async (req, res) => {
  const id = req.params.id;
  const deleteUsuario = await usuario.destroy({
    where: {
      id: id,
    },
  });
  res.status(204).json({
    ok: true,
    status: 204,
    body: deleteUsuario,
  });
});

module.exports = router;
