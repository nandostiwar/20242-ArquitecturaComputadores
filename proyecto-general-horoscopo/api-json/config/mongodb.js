require("dotenv").config();
const { MongoClient, ServerApiVersion } = require("mongodb");
const uri = process.env.MONGO_URI;

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

const validatedb = async () => {
  try {
    await client.connect();
    console.log("Conectado a la base de datos");
  } catch (error) {
    console.error(error);
  }
};

validatedb();

module.exports = client;
