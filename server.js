const express = require("express");
const app = express();

require("dotenv").config();
const dbConfig = require("./config/dbConfig");

const portfolioRoute = require("./routes/portfolioRouts");

app.use(express.json());

app.use("/api/portfolio", portfolioRoute);

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log("Server is up at Port:- ", port);
});
