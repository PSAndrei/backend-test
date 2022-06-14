const Person = require("../models");

async function controllerLoadData(req, res) {
  const p = new Promise((r) => {
    setTimeout(() => {
      console.log("...data from DB was loaded");
      r();
    }, 12000);
  });

  await p;
  res.send({ response: "hello, user!" });
}

function controllerSendHello(req, res) {
  const response = { text: "Hello World" };
  res.send(response);
}

function controllerSetPerson(req, res) {
  if (!req.body) res.send(req);
  console.log(req.body);
  const isMale = req.body.isMale;
  const name = req.body.name;

  const newPerson = new Person({ isMale, name });
  newPerson.save((err) => {
    if (err) throw err;
  });
  res.send(200);
}

function controllerGetPersonList(req, res) {
  Person.find({}, (err, list) => {
    if (err) throw err;
    res.send(list);
  });
}
module.exports = {
  controllerLoadData,
  controllerSendHello,
  controllerSetPerson,
  controllerGetPersonList,
};
//MVC
