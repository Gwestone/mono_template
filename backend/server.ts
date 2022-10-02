import * as http from "http";

const server = http.createServer((req, res): void => {
  res.writeHead(200);
  res.end("Hello world!");
});
server.listen(3000);
