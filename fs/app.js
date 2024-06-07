const fs = require("fs");

//create a file

fs.writeFile("example.txt", "This is example", (err) => {
  if (err) {
    console.log("error while creating file");
  } else {
    //read the file
    fs.readFile("example.txt", "utf8", (err, fileContent) => {
      if (err) {
        console.log("error while reading file content");
      } else {
        //will print buffer stream if no encoding given
        console.log("File content ", fileContent);
      }
    });
  }
});

// rename a file
fs.rename("example.txt", "example2.text", (err) => {
  if (err) {
    console.log("Error while renaming file");
  }
});

//append content to a file

fs.appendFile("example.txt", "\n appending more content", (err) => {
  if (err) {
    console.log("error while appending more content");
  } else {
    console.log("Appended content successfully");
  }
});

//delete file
fs.unlink("example2.text", (err) => {
  if (err) {
    console.log("error while deleting the file");
  } else {
    console.log("File deleted successfully");
  }
});
