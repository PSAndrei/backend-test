const express = require("express");
const urlencodedParser = express.urlencoded({ extended: false });
const router = express.Router();
const { addMessage } = require("../controllers");

// router.get("/hi", controllerSendHello);

// router.post("/setPerson", urlencodedParser, controllerSetPerson);
// router.get("/personsList", controllerGetPersonList);

router.post("/message", urlencodedParser, addMessage);

module.exports = router;
