const http = require("http");

const refreshPath = process.argv[2];

const req = http.request(`http://localhost:8321/${refreshPath}`, (res) => {
  res.setEncoding("utf-8");
  res.on("data", () => {});
  res.on("end", () => {
    console.log("done");
  });
});

req.on("error", (err) => console.error(err));

req.end();
