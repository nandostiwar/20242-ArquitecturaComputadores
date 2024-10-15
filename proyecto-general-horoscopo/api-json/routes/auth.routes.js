const express = require("express");
const router = express.Router();
const signoController = require("./controllers/signoController");

// Ruta para login
router.post("/login", signoController.loginUser);

module.exports = router;
