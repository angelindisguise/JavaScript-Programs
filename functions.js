// call function
function myFunction() {
    console.log('hello world, first js function');
}

// declare function
myFunction();
console.log(typeof myFunction);

// immediately invoked function
(function newFunction() {
    console.log("Hello");
})();

function paramFunction(param1, param2) {
    console.log(param1);
    console.log(param2);
}

paramFunction(20, "yamama");