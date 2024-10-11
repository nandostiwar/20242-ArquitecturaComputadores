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

const loginCompare = async (req, res)=>{
    const oneSigno = req.params.signo;
    const allSignos = await fs.readFile(path.join(__dirname,'../../db/user.json'));
    const objSignos = JSON.parse(allSignos);
    const result = objSignos[oneSigno];

    const { username, password } = req.body;

    try {
        const allUsers = await fs.readFile(path.join(__dirname, '../../db/user.json'), 'utf-8');
        const users = JSON.parse(allUsers).users;
        
        const user = users.find(u => u.username === username && u.password === password);

        if (user) {
            res.json({ access: true, message: 'Login successful' });
        } else {
            res.json({ access: false, message: 'Invalid credentials' });
        }
    } catch (error) {
        console.error('Error reading the file:', error);
        res.status(500).json({ error: 'Error processing the request' });
    }
    
    res.json(result)
};    
        













   


module.exports = {
    getAllSignos,
    getOneSigno,
    updateSigno,
    loginCompare
}