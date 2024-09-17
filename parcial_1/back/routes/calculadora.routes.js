const express = require('express');
const router = express.Router();
const calculadoraControllers = require('../controllers/calculadoraControllers.js');

router
    .post('/adcendente', calculadoraControllers.adcendente)
    .post('/descendente', calculadoraControllers.descendente)
    .post('/multiplicar', calculadoraControllers.multiplicar)
    .post('/mayor', calculadoraControllers.mayor)
    .post('/menor', calculadoraControllers.menor)
    .post('/promedio', calculadoraControllers.promedio)

    

module.exports = router;