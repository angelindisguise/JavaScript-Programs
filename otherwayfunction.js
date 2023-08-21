function myFunction() {
    console.log("smthn");
}

const anthrFnctn = function() {
    console.log("another thing");
}

const returnFunction = () => {
    const a = 21;
    return a;
}

const Function1 = () => {
    const b = 21;
    return b > a;
}

console.log(typeof anthrFnctn);
anthrFnctn();
myFunction();
const result = returnFunction();
result;
const result2 = Function1();
result2;