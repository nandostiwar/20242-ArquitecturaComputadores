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

const loginCompare = async (req, res) => {
    try {
        const { username, password } = req.body;

        // Leer archivo users.json
        const usersData = await fs.readFile(path.join(__dirname, '../../db/users.json'));
        const users = JSON.parse(usersData);

        // Leer archivo admins.json
        const adminsData = await fs.readFile(path.join(__dirname, '../../db/admins.json'));
        const admins = JSON.parse(adminsData);

        // Buscar el usuario en admins
        const adminResult = admins.find(admin => admin.username === username && admin.password === password);

        // Buscar el usuario en users
        const userResult = users.find(user => user.username === username && user.password === password);

        // Responder según el tipo de usuario
        if (adminResult) {
            // Si el usuario está en admins, es un ADMIN
            return res.json({ status: "ADMIN", username: adminResult.username });
        } else if (userResult) {
            // Si el usuario está en users, es un USER
            return res.json({ status: "USER", username: userResult.username });
        } else {
            // Si no está en ninguno, devolver un ERROR
            return res.json({ status: "ERROR", message: "Usuario no encontrado" });
        }
    } catch (error) {
        // Manejar errores
        res.status(500).json({ status: "ERROR", message: "Error al procesar la solicitud", error: error.message });
    }
};


module.exports = {
    getAllSignos,
    getOneSigno,
    updateSigno,
    loginCompare
}