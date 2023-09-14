const express = require("express");
const cors = require('cors');
const morgan = require('morgan');


const app = express();
const port = 5001;

//middleware
app.use(cors())
app.use(morgan('dev'))
app.use(express.json())


app.get("/", function (req, res) {
  res.send("Hello World");
});

app.post("/user", function (req, res) {

  const {name, lasname , id} = req.body
  res.send("Hello sergio");
});

app.listen(port, () => console.log(`servidor en http://localhost:${port}`));
