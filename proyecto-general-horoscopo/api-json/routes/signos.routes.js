const express = require("express");
const router = express.Router();
const signoController = require("./controllers/signoController.js");
router
  .get("/", signoController.getAllSignos)
  .get("/:signo", signoController.getOneSigno)
  .patch("/:signoEditar", signoController.updateSigno);
router.post("/login", signoController.loginUser);

module.exports = router;
