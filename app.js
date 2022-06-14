const express = require("express");
const mongoose = require("mongoose");
const router = require("./routes");
const app = express();
const port = 3000;

const dbUrl = "mongodb://0.0.0.0:27017/db";
app.use(router);
app.use("/tests", router);

mongoose.connect(dbUrl, { useUnifiedTopology: true }).then((r) => {
  console.log("db was connected");
});

app.listen(port, () => {
  console.log(`server is started on port ${port}`);
});
