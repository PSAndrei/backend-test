const express = require("express");
const urlencodedParser = express.urlencoded({ extended: false });
const router = express.Router();
const {
  controllerLoadData,
  controllerSendHello,
  controllerSetPerson,
  controllerGetPersonList,
} = require("../controllers");

router.get("/hi", controllerSendHello);
router.get("/hello", controllerLoadData);
router.post("/setPerson", urlencodedParser, controllerSetPerson);
router.get("/personsList", controllerGetPersonList);

module.exports = router;
