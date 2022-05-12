const express = require("express");
const app = express();
const port = 3000;

app.get("/hello", (req, res) => {
  const response = { text: "HelloWorld" };
  res.send(response);
});

app.listen(port, () => {
  console.log(`server is started on port ${port}`);
});
