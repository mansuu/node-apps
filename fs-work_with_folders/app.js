const fs = require("fs");

//create a folder
fs.mkdir("fs-basics", (err) => {
  if (err) {
    console.log("error while creating a folder");
  } else {
    console.log("Folder created successfully");
  }
});

//delete a folder
fs.rmdir("fs-basics", (err) => {
  if (err) {
    console.log("error while deleting the folder");
  } else {
    console.log("Folder deleted successfully");
  }
});

//create a file inside folder
fs.writeFile("./fs-basics/example.txt", "123", (err) => {
  if (err) {
    console.log("error while creating the file");
  } else {
    console.log("file created successfully");
  }
});

//delete folder which contains file(s)
/**
 * non empty folder can not be deleted, throw an error
 */
fs.rmdir("fs-basics", (err) => {
  if (err) {
    console.log("error while deleting the folder");
  } else {
    console.log(" file deleted");
  }
});

/**
 * to delete a non empty folder, first delete the files then delete the folder
 * if there are multiple files present in folder
 * use readfile of fs to get an array of files present inside the folder
 * loop through them and delete
 * then delete folder
 */
fs.unlink("./fs-basics/example.txt", (err) => {
  if (!err) {
    fs.rmdir("fs-basics", (err) => {
      if (err) {
        console.log("error while deleting the folder");
      } else {
        console.log(" folder deleted");
      }
    });
  }
});
