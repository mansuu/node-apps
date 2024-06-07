const EventEmittor = require("events");
const { emit } = require("process");
const eEmitttor = new EventEmittor();

eEmitttor.on("tutorial", () => {
  console.log("event emitted without params");
});
eEmitttor.on("tutorialP", (num1, num2) => {
  console.log("event emitted with params", num1 + num2);
});

eEmitttor.emit("tutorial");
eEmitttor.emit("tutorialP", 5, 6);

class Person extends EventEmittor {
  constructor(name) {
    super();
    this._name = name;
  }
  get name() {
    return this._name;
  }
}

const himanhsu = new Person("Himanshu Srivastava");
const neeti = new Person("Neeti Niharika");

himanhsu.on("name", () => {
  console.log("This person name is ", himanhsu.name);
});
neeti.on("name", () => {
  console.log("This person name is ", neeti.name);
});

//Eventys are executed synchrounsly
himanhsu.emit("name");
neeti.emit("name");
