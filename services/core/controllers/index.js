const Message = require("../models");

function randomIntFromInterval(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
async function timer() {
  let max = 3;
  let callbackTimer = randomIntFromInterval(1, 4);
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (callbackTimer > max) {
        reject("error");
      } else {
        resolve("success");
      }
    }, callbackTimer);
  });
}

async function addMessage(req, res) {
  if (!req.body) {
    res.send(req);
    return;
  }

  const actor = "user";
  const text = req.body.message;

  const newMessage = new Message({ actor, text });

  try {
    const result = await newMessage.save();
    if (result) {
      // await timer();
      res.send({ actor, message: text });
    }
  } catch (e) {
    res.send({ actor, message: e });
  }
}
// function controllerSendHello(req, res) {
//   const response = { text: "Hello World" };
//   res.send(response);
// }

// function controllerSetPerson(req, res) {
//   if (!req.body) res.send(req);
//   const isMale = req.body.isMale;
//   const name = req.body.name;

//   const newPerson = new Person({ isMale, name });
//   newPerson.save((err) => {
//     if (err) throw err;
//   });
//   res.send(200);
// }

// function controllerGetPersonList(req, res) {
//   Person.find({}, (err, list) => {
//     if (err) throw err;
//     res.send(list);
//   });
// }
module.exports = {
  addMessage,
};
