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

const Function1 = (a) => {
    const b = 21;
    return b > a;
}

function yaFunction() {
    return 19;
}
 

console.log(typeof anthrFnctn);
anthrFnctn();
myFunction();
const result = returnFunction();
console.log(result);
const result2 = Function1();
console.log(result2);
console.log(yaFunction());
const aliasVariable = yaFunction;
aliasVariable();
console.log(aliasVariable());