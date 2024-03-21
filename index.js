import http from "http";
import fs from "fs";

const port = 3000;
const hostname = "localhost";

const server = http.createServer((req, res) => {
  let path = "./views";

  res.setHeader("Content-Type", "text/html");

  switch (req.url) {
    case "/":
      path += "/index.html";
      break;
    case "/about":
      path += "/about.html";
      break;
    case "/contact-me":
      path += "/contact-me.html";
      break;
    default:
      path += "/404.html";
      break;
  }

  fs.readFile(path, (err, data) => {
    if (err) console.log(err);
    else res.end(data);
  });
});

server.listen(port, hostname, () => {
  console.log("server listening at port " + port);
});
