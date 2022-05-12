const express = require("express");
const router = require("./modules/hello");
const app = express();
const port = 3000;

app.use(router);

app.listen(port, () => {
  console.log(`server is started on port ${port}`);
});
