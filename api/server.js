const express = require("express");
const app = express();
const port = 3200;
const cors = require("cors");
const mongodb = require("mongodb");
const morgan = require("morgan");

// Morgan is a logger middleware for Express.
app.use(morgan("dev")); 

// Enable body parsing
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Connect to MongoDB
const MongoClient = mongodb.MongoClient;
const mongoUrl =
  "mongodb+srv://thomiaditya:ptatmoYraPGFDc5b@mental-app.apjjz.mongodb.net/?retryWrites=true&w=majority";
  const dbName = "mental-app";
  const collectionName = "waiting-list";
  
  // Connect to MongoDB
  const client = new MongoClient(mongoUrl, { useNewUrlParser: true });
client.connect((err) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log("Connected to MongoDB");
});

var corsOptions = {
    origin: '*',
    optionsSuccessStatus: 200,
  }

app.use(cors(corsOptions));

// Add a new patient to the waiting list
app.post("/api/waiting-list", (req, res) => {
    const patient = req.body;
  client
    .db(dbName)
    .collection(collectionName)
    .insertOne(patient, (err, result) => {
      if (err) {
        console.log(err);
        res.status(500).send({ error: "Error adding patient to waiting list" });
        return;
      }
      res.json({
        status: "success",
        message: "Patient added to waiting list",
      });
    });
});

// Listen on port 3000
app.listen(port, '0.0.0.0', () => {
  console.log(`Listening on port http://0.0.0.0:${port}`);
});
