
const colors = ["orange", "green", "blue", "purple", "yellow"];
const randomIndex = Math.floor(Math.random() * colors.length);
const randomColor = colors[randomIndex]


//This can be very inefficient in cases like these where you have many things to check
/*if (randomColor === "orange"){
    console.log("The color is orange");
} else if (randomColor === "green") {
    console.log("The color is green");
} else if (randomColor === "yellow"){
    console.log("The color is yellow");
} else if(randomColor === "blue") {
    console.log("The color is blue");
} else if(randomColor === "purple") {
    console.log("The color is purple");
}*/

//Switch / Case statement
switch (randomColor) {
    case "orange":
        console.log("The color is orange");
        break;
    case "green":
        console.log("The color is green");
        break;
    case "yellow":
        console.log("The color is yellow");
        break;
    case "blue":
        console.log("The color is blue");
        break;
    case "purple":
        console.log("The color is purple");
        break;
    //if no cases are met, do this
    default:
        console.log("no color found")
}