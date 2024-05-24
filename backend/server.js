const { MongoClient } = require("mongodb");

const uri =
  "mongodb+srv://viniciusolivi:vcUEtMayrMhipi7n@vocluster.ipcls0v.mongodb.net/?retryWrites=true&w=majority&appName=VOCluster";
const client = new MongoClient(uri);
async function createConnection() {
  try {
    await client.connect();
    console.log("Connected to the database");
  } catch (error) {
    log.error("Error connecting to the database: ", error);
  }
}

createConnection();
