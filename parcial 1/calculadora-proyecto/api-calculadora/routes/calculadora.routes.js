const express = require("express");
const router = express.Router();
const { ordenar } = require("../controllers/calculadoraControllers");

router.post("/ordenar", ordenar);

module.exports = router;
