const fs = require("fs/promises");
const path = require("path");

const getAllSignos = async (req, res) => {
  const signo = await fs.readFile(path.join(__dirname, "../../db/signos.json"));
  const signosJson = JSON.parse(signo);
  res.json(signosJson);
};

const getOneSigno = async (req, res) => {
  const oneSigno = req.params.signo;
  const allSignos = await fs.readFile(
    path.join(__dirname, "../../db/signos.json")
  );
  const objSignos = JSON.parse(allSignos);
  const result = objSignos[oneSigno];
  res.json(result);
};

const updateSigno = async (req, res) => {
  const signoEditar = req.params.signoEditar;
  const { textoEditar } = req.body;
  const allSignos = await fs.readFile(
    path.join(__dirname, "../../db/signos.json")
  );
  const objSignos = JSON.parse(allSignos);

  const objUpdate = {
    ...objSignos,
    [signoEditar]: textoEditar,
  };

  // console.log(objUpdate);
  await fs.writeFile(
    path.join(__dirname, "../../db/signos.json"),
    JSON.stringify(objUpdate, null, 2),
    { encoding: "utf-8" }
  );

  res.json({
    message: "Updated",
  });
};

const loginUser = async (req, res) => {
  const { username, password } = req.body;

  try {
    // Leer el archivo de usuarios
    const usersData = await fs.readFile(
      path.join(__dirname, "../../db/users.json")
    );
    const adminsData = await fs.readFile(
      path.join(__dirname, "../../db/admins.json")
    );
    const users = JSON.parse(usersData);
    const admins = JSON.parse(adminsData);

    // Buscar en la lista de usuarios y admins
    let user = users.find(
      (u) => u.user === username && u.password === password
    );
    let role = "user";

    if (!user) {
      user = admins.find((a) => a.user === username && a.password === password);
      role = user ? "admin" : null;
    }

    if (user) {
      res.json({ role, success: true });
    } else {
      res
        .status(401)
        .json({ success: false, message: "Credenciales incorrectas" });
    }
  } catch (error) {
    res.status(500).json({ success: false, message: "Error en el servidor" });
  }
};

module.exports = {
  getAllSignos,
  getOneSigno,
  updateSigno,
  loginUser,
};
