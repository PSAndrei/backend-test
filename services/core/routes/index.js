const express = require("express");
const urlencodedParser = express.urlencoded({ extended: false });
const router = express.Router();
const { addMessage, getMessages } = require("../controllers");

router.post("/message", urlencodedParser, addMessage);
router.get("/messages", getMessages);

module.exports = router;
