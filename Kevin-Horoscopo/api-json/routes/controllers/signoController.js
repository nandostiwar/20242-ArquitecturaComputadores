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

const login = async (req,res) => {
    
    const { body } = req;
    let { username, password } = body;

    let all_users = await fs.readFile(path.join(__dirname,'../../db/users.json'));
    let array_users = JSON.parse(all_users);
    //donde voy a guardar el usuario si es valido
    let user_select = []
    
    // recorrer todos los usuarios almacenados en el json 
    array_users.forEach(user => {
        /* 
            comparar el usuario que me llega en el post con
            el que tengo almacenado en el json
        */
        if(user.username == username && user.password == password){
            // si las credenciales son validas
            // asigno el user al user_select
            user_select = user
        }
    });
    // devuelvo los datos del usuario si son correctos
    res.json({
        usuario: user_select.username,
        rol:user_select.rol
    })
}

module.exports = {
    getAllSignos,
    getOneSigno,
    updateSigno,
    login
}