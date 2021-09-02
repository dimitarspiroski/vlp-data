const express = require("express");
const helmet = require("helmet");
const fs = require("fs");
const path = require("path");

const dataPath = path.join(process.cwd(), "/data", "/academies.json");
const academies = fs.readFileSync(dataPath, { encoding: "utf-8" });

const app = express();
const PORT = process.env.PORT || "3000";
const HOST = process.env.HOST || "0.0.0.0";

app.use(helmet());

app.use("/academies", (req, res) => {
  res.status(200).send(academies);
});

app.listen(PORT, HOST, () => {
  console.log(`Server is running on port:${PORT}`);
});
