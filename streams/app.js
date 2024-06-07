/**
 * Stream is a very powerful concept
 * it reads/writes the data in chunks
 * for example, if you have  a lage file, you don't have to wait for entire
 * file to be loaded, data can be read in small chunks and you can start processing
 * those small chunks
 *
 */

const fs = require("fs");
const readStream = fs.createReadStream("./file1.txt", "utf8");
const writeStream = fs.createWriteStream("./file2.txt");
/**
 * readable stream is an event emittor
 */
readStream.on("data", (chunk) => {
  console.log("chunk : ", chunk);
  //write this chunk in a different file
  writeStream.write(chunk, (err) => {
    if (err) {
      console.log("Error while writing to file2.txt");
    }
  });
});
