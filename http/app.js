/**
 * http module helps create a server,
 * In this example, I will also show how to serve static files to client
 */

const http = require("http");
const fs = require("fs");
/**
 * Create a server using http
 */
const server = http.createServer((req, res) => {
  console.log(req.url);
  if (req.url === "/") {
    res.write("Hello, Welcome to the world of node js");
    //Send response back to client
    res.end();
  } else if (req.url === "/html") {
    /**send static html file */
    const readStream = fs.createReadStream("./assets/index.html");
    res.writeHead(200, { "Content-type": "text/html" });
    readStream.pipe(res);
  } else if (req.url === "/json") {
    /**send static json file */
    const readStream = fs.createReadStream("./assets/app.json");
    res.writeHead(200, { "Content-type": "application/json" });
    readStream.pipe(res);
  } else if (req.url === "/image") {
    /**send static image file */
    const readStream = fs.createReadStream("./assets/image.png");
    res.writeHead(200, { "Content-type": "image/png" });
    readStream.pipe(res);
  }
});

/**
 * server is listening on port 3000
 */
server.listen("3000", () => {
  console.log("Server listening on port 3000");
});
