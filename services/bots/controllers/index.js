const axios = require("axios");

console.log(`http://${process.env.COREHOST}:${process.env.COREPORT}`);
const coreUrl = `http://${process.env.COREHOST}:${process.env.COREPORT}`;

let params = { "Access-Control-Allow-Origin": "*" };

const getMessages = async (request, response) => {
  const answer = await axios.get(`${coreUrl}/messages`, params);
  if (answer) {
    response.send({ messages: answer.data });
  }
};

const sendMessage = async (request, response) => {
  if (!request.body) response.send(request);
  const result = await axios.post(`${coreUrl}/message`, request.body);
  response.send({ serverText: result.data });
};

module.exports = { getMessages, sendMessage };
