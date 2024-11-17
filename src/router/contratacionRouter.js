const router = require("express").Router();

const contratacion = require("../models/contratacionModel");

// Rutas de contratación
// 1) GET todos los contratos
router.get("/contratacion", async (req, res) => {
  const contrataciones = await contratacion.findAll();
  await contratacion.sync();
  res.status(200).json({
    ok: true,
    status: 200,
    body: contrataciones,
  });
});
// 2) GET contrato por id
router.get("/contratacion/:id", async (req, res) => {
  const id = req.params.id;
  const Contratacion = await contratacion.findOne({
    where: {
      id: id, // El id viene de la tabla y toma el valor de la constante id que se declaró arriba
    },
  });
  res.status(200).json({
    ok: true,
    status: 200,
    body: Contratacion,
  });
});
// 3) POST crear contrato
router.post("/contratacion", async (req, res) => {
  const contratacionData = req.body;
  await contratacion.sync();
  const contratacionCrear = await contratacion.create({
    estado: contratacionData.estado,
  });
  res.status(201).json({
    ok: true,
    status: 201,
    message: "Contrato creado",
  });
});
// 4) PUT actualizar contrato
router.put("/contratacion/:id", async (req) => {
  const id = req.params.id;
  const contratacionData = req.body;
  const contratacionActualizar = await contratacion.update(
    {
      estado: contratacionData.estado,
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
    body: contratacionActualizar,
  });
});
// 5) DELETE eliminar contrato
router.delete("/contratacion/:id", async (req, res) => {
  const id = req.params.id;
  const contratacionEliminar = await contratacion.destroy({
    where: {
      id: id,
    },
  });
  res.status(200).json({
    ok: true,
    status: 200,
    body: contratacionEliminar,
  });
});

module.exports = router;
