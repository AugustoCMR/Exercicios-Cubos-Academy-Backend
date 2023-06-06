const express = require("express");
const app = express();
const router = require("./roteador");

app.use("/", router);

app.listen(8000);