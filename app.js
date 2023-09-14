const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
require("dotenv").config();

const app = express();
const port = process.env;

//middleware
app.use(cors());
app.use(morgan("dev"));
app.use(express.json());

app.get("/", function (req, res) {
  res.send("Hello World");
});

app.post("/user", function (req, res) {
  //recibir datos por body
  const { name, lastname, id } = req.body;
  res.send({
    name,
    lastname,
    id,
  });
});

app.listen(port, () => console.log(`servidor en http://localhost:${port}`));
