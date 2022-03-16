const express = require("express");
const app = express();
const morgan = require("morgan");
const cors = require("cors");
const busboy = require("connect-busboy");
const busboyBodyParser = require("busboy-body-parser");

require("./database");

//Middlewares
app.use(morgan("start"));
app.use(express.json());
app.use(busboy());
app.use(busboyBodyParser());
app.use(cors());

//Variables
app.set("port", 3001);

//Rotas
app.use("/salao", require("./src/routes/salao.routes"));

app.listen(app.get("port"), () => {
  console.log(`BACK-END LISTEN ON PORT ${app.get("port")}`);
});
