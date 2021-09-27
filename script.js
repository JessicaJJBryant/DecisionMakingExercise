// DECISION MAKING EXERCISE

// 1a
let randomNum=Math.floor(Math.random()*5+1);
console.log(randomNum);

// 1b
if (randomNum >=4) {
    // could also do if (randomNum>3){
    console.log("Greater than or equal to 4");
    // BETTER WAY TO WRITE THE else if:
} else if (randomNum>=2){
// else if (randomNum===3||randomNum===2) 
// SHORTHAND WAY TO WRITE ABOVE:
// else if (randomNum===2||3) {
    console.log("Equal to 2 or 3");
} else {
    console.log("Equal to 1");
}

// 1c
if (randomNum!==3) {
    console.log("Not equal to 3");
}

// 1d This helps us to see what the randomNum is:
console.log(randomNum);
// if(randomNum!==3&&randomNum!==5) {
// THE SHORTHAND WAY (SINCE BOTH ARE NOT EQUAL TO randomNum):
if(randomNum!==3&&5) {
    console.log("NOT equal to 3 AND not equal to 5");
}

// 1e This helps us to see what the randomNum is:
console.log(randomNum);
// if(randomNum===2||randomNum===4) {
    // THE SHORTHAND WAY:
if(randomNum===2||4){
    console.log("Equal to 2 OR equal to 4");
}

        // Bonus Section
// 2 TERNARY
console.log(randomNum>=4 ? "Greater than or equal to 4" : "Less than 4");
// The longhand way on this (above is better/shorter because a ternary is cool that it will return a value too)
// randomNum>=console.log("Greater than or equal to 4"):console.log("Less than 4")

// 3 SWITCH STATEMENT--takes in a parameter/argument and returns something based on the CASE (or the match) that the parameter/argument goes with. In this example, if randomNum is 1, it will run the console.log that goes with it and stop (because of the break). If false, it will go on to the next until it gets a match and then stop if there is a break.
switch (randomNum) {
    case 1:
        console.log("One");
    break;
    case 2:
        console.log("Two");
    break;
    case 3:
        console.log("Three");
    break;
    case 4:
        console.log("Four");
    break;
    case 5:
        console.log("Five");
    // Or for the last one, you can do default. It works like an else.
    // default:
    // console.log("Five");
}