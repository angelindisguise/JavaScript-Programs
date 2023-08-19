/*constants are unchangeable*/
const myArray = [10, 20, 30, 40];
const secondVar = {firstproperty: 'hello world!'};
const thirdVar = 9;

/*var is changeable */
var x = 19;

/*let is not changeable */
let y = 1;

myArray.push(50);
console.log(myArray);
console.log(y);
console.log(x);
console.log(secondVar.firstproperty);