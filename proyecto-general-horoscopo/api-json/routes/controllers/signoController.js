const fs = require('fs/promises');
const path = require('path');

const getAllSignos = async (req, res)=>{
    const signo = await fs.readFile(path.join(__dirname,'../../db/signos.json'));
    const signosJson = JSON.parse(signo)
    res.json(signosJson);
}

const getOneSigno = async (req, res)=>{
    const oneSigno = req.params.signo;
    const allSignos = await fs.readFile(path.join(__dirname,'../../db/signos.json'));
    const objSignos = JSON.parse(allSignos);
    const result = objSignos[oneSigno];
    res.json(result)
}

const updateSigno = async (req, res)=>{
    const signoEditar = req.params.signoEditar;
    const {textoEditar} = req.body;
    const allSignos = await fs.readFile(path.join(__dirname,'../../db/signos.json'));
    const objSignos = JSON.parse(allSignos);

    const objUpdate = {
        ...objSignos,
        [signoEditar]: textoEditar
    }

    // console.log(objUpdate);
    await fs.writeFile(path.join(__dirname,'../../db/signos.json'), JSON.stringify(objUpdate, null, 2), {encoding: 'utf-8'})

    res.json({
        message: "Updated"
    })
}

const fs = require('fs').promises;
const path = require('path');

const loginCompare = async (req, res) => {
    try {
        const { username, password } = req.body;  // Obtener el usuario y contraseña del body de la solicitud

        // Leer el archivo JSON con los usuarios y administradores
        const allData = await fs.readFile(path.join(__dirname, '../../db/user.json'), 'utf-8');
        const data = JSON.parse(allData);

        // Verificar si el usuario está en la lista de usuarios
        const user = data.users.find(user => 
            user.username === username && user.password === password
        );

        // Verificar si el usuario está en la lista de administradores
        const admin = data.admins.find(admin => 
            admin.username === username && admin.password === password
        );

        // Verificar si es "user", "admin" o si no existe
        if (user) {
            res.status(200).json({ message: "Acceso concedido: Usuario" });
        } else if (admin) {
            res.status(200).json({ message: "Acceso concedido: Administrador" });
        } else {
            res.status(401).json({ message: "Credenciales incorrectas" });
        }

    } catch (error) {
        console.error("Error al leer el archivo JSON:", error);
        res.status(500).json({ message: "Error interno del servidor" });
    }
};









   


module.exports = {
    getAllSignos,
    getOneSigno,
    updateSigno,
    loginCompare
}