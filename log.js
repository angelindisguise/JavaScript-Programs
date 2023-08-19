const isUserLoggedIn = true;
const userPermission = false;
const actionPermitted = isUserLoggedIn && userPermission;

if (actionPermitted){
  console.log("Action allowed");
} else {
  console.log("Action not allowed");
  }

const result = !(((40/20) === 2 && true) || ("yes" === "no"));
console.log("The evaluation comes as", result);


const step1 = 40/20;
const step2 = step1 === 2;
const step3 = step2 && true;
const step4 = "yes" === "no";
const step5 = step3 || step4;
const step6 = !step5;
console.log(step1);
console.log(step2);
console.log(step3);
console.log(step4);
console.log(step5);
console.log(step6);

//evaluating a function into a variable
const rsult = (() => {
    return 20;
}) ();
console.log(rsult);