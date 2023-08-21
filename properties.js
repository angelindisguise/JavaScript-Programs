function yaFunction() {
    return 19;
}

const Obj1 = {
    prop1: 18,
    prop2: yaFunction
}

console.log(Obj1.prop1);
Obj1.prop2(); // doesnt do anything
console.log(Obj1.prop2());
