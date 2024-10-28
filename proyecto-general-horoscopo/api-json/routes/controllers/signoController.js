const client = require("../../config/mongodb");

const dbName = "db";

const getAllSignos = async (req, res) => {
  try {
    const db = client.db(dbName);
    const signos = await db.collection("signos").find({}).toArray();
    res.json(signos);
  } catch (error) {
    res.status(500).json({ message: "Error al obtener los signos", error });
  }
};

const getOneSigno = async (req, res) => {
  const signoNombre = req.params.signo;
  try {
    const db = client.db(dbName);
    const signo = await db
      .collection("signos")
      .findOne({ nombre: signoNombre });

    if (signo) {
      res.json(signo);
    } else {
      res.status(404).json({ message: "Signo no encontrado" });
    }
  } catch (error) {
    res.status(500).json({ message: "Error al obtener el signo", error });
  }
};

const updateSigno = async (req, res) => {
  const signoEditar = req.params.signoEditar;
  const { textoEditar } = req.body;

  try {
    const db = client.db(dbName);
    const result = await db
      .collection("signos")
      .updateOne({ nombre: signoEditar }, { $set: { texto: textoEditar } });

    if (result.matchedCount > 0) {
      res.json({ message: "Signo actualizado" });
    } else {
      res.status(404).json({ message: "Signo no encontrado" });
    }
  } catch (error) {
    res.status(500).json({ message: "Error al actualizar el signo", error });
  }
};

const loginUser = async (req, res) => {
  const { username, password } = req.body;

  try {
    const db = client.db(dbName);
    let user = await db.collection("users").findOne({ username, password });

    if (user) {
      const role = user.role || null;
      res.json({ role, success: true });
    } else {
      res
        .status(401)
        .json({ success: false, message: "Credenciales incorrectas" });
    }
  } catch (error) {
    console.error("Error en el login:", error);
    res.status(500).json({ success: false, message: "Error en el servidor" });
  }
};

module.exports = {
  getAllSignos,
  getOneSigno,
  updateSigno,
  loginUser,
};
