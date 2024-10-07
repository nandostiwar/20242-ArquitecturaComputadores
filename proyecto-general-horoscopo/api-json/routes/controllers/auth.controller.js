const fs = require('fs');
const path = require('path');

const usersPath = path.join(__dirname, '../../db', 'roles.json');
const usersData = JSON.parse(fs.readFileSync(usersPath, 'utf8'));

const login = (req, res) => {
  const { username, password } = req.body;

  const user = usersData.users.find(u => u.username === username && u.password === password);

  if (user) {
    return res.status(200).json({ role: user.role });
  } else {
    return res.status(401).json({ message: 'Credenciales invalidas' });
  }
};

module.exports = { login };
