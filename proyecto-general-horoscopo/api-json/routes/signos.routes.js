const express = require('express');
const router = express.Router();
const signoController = require('./controllers/signoController.js');
const { login } = require('./controllers/auth.controller.js');
router
    .get('/', signoController.getAllSignos)
    .get('/:signo', signoController.getOneSigno)
    .patch('/:signoEditar', signoController.updateSigno)
    .post('/login', login);

module.exports = router;