const express = require('express');
const router = express.Router();
const calculadoraControllers = require('../controllers/calculadoraControllers.js');

router
    .post('/ordenar', calculadoraControllers.ordenar)
    .post('/evaluar', calculadoraControllers.evaluar)
    


module.exports = router;