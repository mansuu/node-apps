const sum = (num1, num2) => num1 + num2;
const PI = 3.14;
class SomeClassObject {
  className = "SomeClassObject";
  constructor() {
    console.log("Class object created");
  }
}
//Ugly export syntax
module.exports.sum = sum;
module.exports.PI = PI;
module.exports.SomeClassObject = SomeClassObject;

//better way to export

module.exports = { sum, PI, SomeClassObject };
