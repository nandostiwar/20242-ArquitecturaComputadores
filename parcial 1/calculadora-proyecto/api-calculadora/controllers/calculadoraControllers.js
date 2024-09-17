// calculadorController.js
function ordenar(req, res) {
  const { values, order } = req.body;

  if (!values || typeof values !== "object") {
    return res.status(400).json({ error: "Valores inválidos" });
  }

  if (!order || (order !== "asc" && order !== "desc")) {
    return res.status(400).json({ error: "Orden inválido" });
  }

  try {
    const orderedValues = Object.entries(values)
      .sort((a, b) => (order === "asc" ? a[1] - b[1] : b[1] - a[1]))
      .map(([key, valor]) => `${key}: ${valor}`);

    res.json({ valoresOrdenados: orderedValues });
  } catch (error) {
    res.status(500).json({ error: "Error interno del servidor" });
  }
}

module.exports = { ordenar };
