const arr = [1, 33, 27, 64];
const arr2 = [3, "goop", 34, "fspon", 95, 342, "eroiw", "dbal"]


// can not use "const" keyword because it makes reassigning the variable impossible
for (let i = 0; i < 100; i++){
    console.log(i)
}

console.log()

for (let i = 0; i < arr2.length; i++){
    if (typeof arr2[i] === "number") {
        console.log(arr2[i]);
    }
}

console.log()
console.log(arr[2]);
