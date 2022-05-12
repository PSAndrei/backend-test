const http = require("http");

http.get("http://localhost:3000/hello", (res) => {
  let data = [];

  res.on("data", (chunk) => {
    data.push(chunk);
  });

  res.on("end", () => {
    const dataResult = JSON.parse(Buffer.concat(data).toString());
    console.log(dataResult);
  });
});
