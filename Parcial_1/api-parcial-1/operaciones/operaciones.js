const express = require('express');
const cors = require('cors');
const app = express();
const port = 3500;
const routes = require('./routes/routes'); // Ajusta la ruta a tu archivo de rutas

app.use(cors());
app.use(express.json());
app.use('/v1/calculadora', routes);

app.listen(port, () => {
    console.log(`Servidor corriendo en http://localhost:${port}`);
});