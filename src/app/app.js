const express = require("express");
const morgan = require("morgan");

const usuarioRouter = require("../router/usuarioRouter");
const contadorRouter = require("../router/contadorRouter");
const servicioRouter = require("../router/servicioRouter");
const contratacionRouter = require("../router/contratacionRouter");
const calificacionRouter = require("../router/calificacionRouter");

const app = express();

app.use(morgan("dev"));
app.get("/", (req, res) => {
  res.send("Hola mundo");
});

app.use(express.json());
app.use("/api/v1", usuarioRouter);
app.use("/api/v1", contadorRouter);
app.use("/api/v1", servicioRouter);
app.use("/api/v1", contratacionRouter);
app.use("/api/v1", calificacionRouter);

module.exports = app;
