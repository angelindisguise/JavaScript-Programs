// Rest(...) arguments syntax
// Takes all arguments passed when calling function and stores in array
function f(...args) {
    const sum = args[0] + args[1];
    return sum;
}

// rest args
console.log(f(3, 4));


// Higher-order function
function log(inputFunction) {
  return function(...args) {
     console.log("Input", args);
     const result = inputFunction(...args);
     console.log("Output", result);
     return result;
  }
}
const g = log((a, b) => a + b);
g(1, 2); // Logs: Input [1, 2] Output 3