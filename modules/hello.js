const express = require("express");
const router = express.Router();

router.get("/hi", async (req, res) => {
  await new Promise((r) => {
    setTimeout(() => {
      console.log("...data from DB was loaded");
      r();
    }, 12000);
  });

  res.send({ response: "hello, user!" });
});

router.get("/hello", (req, res) => {
  const response = { text: "Hello World" };
  res.send(response);
});

module.exports = router;
