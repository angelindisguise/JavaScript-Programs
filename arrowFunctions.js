// Basic arrow syntax
// A way to declare functions
const f = (a, b) => {
    const sum = a + b;
    return sum;
};


// Omit return, more minimalistic
const g = (a, b) => a + b;


// base arrow syn
console.log(f(3, 4));
// om return
console.log(g(4, 5));