const router = require("express").Router();

const servicio = require("../models/servicioModel");

// Rutas de servicios
// 1) GET todos los servicios
router.get("/servicio", async (req, res) => {
  const servicios = await servicio.findAll();
  await servicio.sync();
  res.status(200).json({
    ok: true,
    status: 200,
    body: servicios,
  });
});
// 2) GET servicio por id
router.get("/servicio/:id", async (req, res) => {
  const id = req.params.id;
  const servicio = await servicio.findOne({
    where: {
      id: id, // El id viene de la tabla y toma el valor de la constante id que se declaró arriba
    },
  });
  res.status(200).json({
    ok: true,
    status: 200,
    body: servicio,
  });
});
// 3) POST crear servicio
router.post("/servicio", async (req, res) => {
  const servicioData = req.body;
  await servicio.sync();
  const servicioCrear = await servicio.create({
    nombreServicio: servicioData.nombreServicio,
    descripcion: servicioData.descripcion,
    precio: servicioData.precio,
  });
  res.status(201).json({
    ok: true,
    status: 201,
    message: "Servicio creado",
  });
});
// 4) PUT actualizar servicio
router.put("/servicio/:id", async (req) => {
  const id = req.params.id;
  const servicioData = req.body;
  const servicioActualizar = await servicio.create(
    {
      nombreServicio: servicioData.nombreServicio,
      descripcion: servicioData.descripcion,
      precio: servicioData.precio,
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
    body: servicioActualizar,
  });
});
// 5) DELETE eliminar servicio
router.delete("/servicio/:id", async (req, res) => {
  const id = req.params.id;
  const servicioEliminar = await servicio.destroy({
    where: {
      id: id,
    },
  });
  res.status(200).json({
    ok: true,
    status: 200,
    body: servicioEliminar,
  });
});

module.exports = router;
