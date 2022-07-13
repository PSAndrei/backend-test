const express = require("express");
const router = express.Router();
const { getMessages, sendMessage } = require("../controllers");
const urlencodedParser = express.urlencoded({ extended: false });

router.get("/messages", getMessages);

router.post("/message", urlencodedParser, sendMessage);
module.exports = router;
