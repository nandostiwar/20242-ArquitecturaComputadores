const dotenv = require("dotenv");
dotenv.config();

const express = require("express");
const { urlencoded, json } = require("express");
const router = require("./routes/signos.routes.js");
const authRouter = require("./routes/auth.routes.js");
const cors = require("cors");
const { client, dbName } = require("./config/mongodb.js");

const app = express();

const corsOptions = {
  origin: "http://localhost:5173",
  methods: ["GET", "POST", "PATCH"],
  allowedHeaders: ["Content-Type", "Authorization"],
};

app.use(urlencoded({ extended: true }));
app.use(json());
app.use(cors(corsOptions));
app.use("/v1/signos", router);
app.use("/v1/auth", authRouter);

const PORT = 4000;
app.listen(PORT, () => {
  console.log(`Listening at port ${PORT}`);
});
