// Immediately invoked function expression
(function main() {
    console.log('Hello World!');
}());

// Known function
function f(a, b) {
    const sum = a + b;
    return sum;
}


// Anonymous function
var g = function(a, b) {
    const sum = a + b;
    return sum;
}


// Function within function
function createFunction() {
    function h(a, b) {
        const sum = a + b;
        return sum;
    }
    // sum becomes a variable returned into the h function and used in the createFunction parent function
    return h;
}


// Function hoisting
function makeFunction() {
    return i;
    function i(a, b) {
        const sum = a + b;
        return sum;
    }
}

// Closures
function createAdder(a) {
    function j(b) {
        const sum = a + b;
        return sum;
    }
    return j;
}


// Known function
console.log(f(3, 4));
// Anon function
console.log(g(4, 5));
// Func within func
const h = createFunction();
console.log(h(5, 6));
// Func hoist
const i = makeFunction();
console.log(i(6, 7));
// Clsrs
const j = createAdder(7);
console.log(j(8));