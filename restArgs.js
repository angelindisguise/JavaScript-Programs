// Rest(...) arguments syntax
// Takes all arguments passed when calling function and stores in array
function f(...args) {
    const sum = args[0] + args[1];
    return sum;
}

// rest args
console.log(f(3, 4));
