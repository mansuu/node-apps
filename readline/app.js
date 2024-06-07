const readline = require("node:readline"); // also an event emittor
const { stdin: input, stdout: output } = require("node:process");
const rl = readline.createInterface({ input, output });

const num1 = Math.floor(Math.random() * 10 + 1);
const num2 = Math.floor(Math.random() * 10 + 1);
const answer = num1 + num2;

rl.question(`what is ${num1} + ${num2}? \n`, (userInput) => {
  if (userInput.trim() == answer) {
    rl.close();
  } else {
    rl.setPrompt("The answer you have given is wrong \n");
    rl.prompt();
  }
});

rl.on("close", () => {
  console.log("CORRECT!!!");
});

rl.on("line", (userInput) => {
  if (userInput.trim() == answer) {
    rl.close();
  } else {
    rl.setPrompt("Please try again \n");
    rl.prompt();
  }
});
