const router = require("express").Router();

const calificacion = require("../models/calificacionModel");

// Rutas de calificación
// 1) GET todas las calificaciones
router.get("/calificacion", async (req, res) => {
  await calificacion.sync();
  const calificaciones = await calificacion.findAll();
  res.status(200).json({
    ok: true,
    status: 200,
    body: calificaciones,
  });
});
// 2) GET calificación por id
router.get("/calificacion/:id", async (req, res) => {
  const id = req.params.id;
  const Calificacion = await calificacion.findOne({
    where: {
      id: id, // El id viene de la tabla y toma el valor de la constante id que se declaró arriba
    },
  });
  res.status(200).json({
    ok: true,
    status: 200,
    body: Calificacion,
  });
});
// 3) POST crear calificación
router.post("/calificacion", async (req, res) => {
  const calificacionData = req.body;
  await calificacion.sync();
  const calificacionCrear = await calificacion.create({
    calificacion: calificacionData.calificacion,
    commentario: calificacionData.commentario,
  });
  res.status(201).json({
    ok: true,
    status: 201,
    message: "Calificación creada",
  });
});
// 4) PUT actualizar calificación
router.put("/calificacion/:id", async (req) => {
  const id = req.params.id;
  const calificacionData = req.body;
  const calificacionActualizar = await calificacion.update(
    {
      calificacion: calificacionData.calificacion,
      commentario: calificacionData.commentario,
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
    body: calificacionActualizar,
  });
});
// 5) DELETE eliminar calificación
router.delete("//:id", async (req, res) => {
  const id = req.params.id;
  const calificaionEliminar = await calificacion.destroy({
    where: {
      id: id,
    },
  });
  res.status(200).json({
    ok: true,
    status: 200,
    body: calificaionEliminar,
  });
});

module.exports = router;
