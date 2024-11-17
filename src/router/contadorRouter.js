const Contador = require("express").Router();

const { faker } = require("@faker-js/faker");
const  contador = require("../models/contadorModel");

// Rutas de contador
// 1) GET todos los contadores
Contador.get("/contador", async (req, res) => {
  const contadores = await contador.findAll();
  res.status(200).json({
    ok: true,
    status: 200,
    body: contadores,
  });
});
// 2) GET contador por id
Contador.get("/contador/:id", async (req, res) => {
  const id = req.params.id;
  const Contador = await contador.findOne({
    where: {
      id: id, // El id viene de la tabla y toma el valor de la constante id que se declaró arriba
    },
  });
  res.status(200).json({
    ok: true,
    status: 200,
    body: Contador,
  });
}); 
// 3) POST crear contador
Contador.post("/contador", async (req, res) => {
  await contador.sync();
console.log('The table for the User model was just (re)created!');
  const contadorData = req.body;
  const contadorCrear = await contador.create({
    especialidad: contadorData.especialidad,
    tarifa: contadorData.tarifa,
    descripcion: contadorData.descripcion,
    calificacion: contadorData.calificacion,
  });
  res.status(201).json({
    ok: true,
    status: 201,
    message: "Usuario creado",
  });
});
// 4) PUT actualizar contador
Contador.put("/contador/:id", async (req, res) => {
  const id = req.params.id;
  const contadorData = req.body;
  const contadorActualizar = await contador.update(
    {
      especialidad: contadorData.especialidad,
      tarifa: contadorData.tarifa,
      descripción: contadorData.descripción,
      calificacion: contadorData.calificacion,
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
    body: contadorActualizar,
  });
});
// 5) DELETE eliminar contador
Contador.delete("/contador/:id", async (req, res) => {
  const id = req.params.id;
  const contadorEliminar = await contador.destroy({
    where: {
      id: id,
    },
  });
  res.status(200).json({
    ok: true,
    status: 200,
    body: contadorEliminar,
  });
});

module.exports = Contador;
