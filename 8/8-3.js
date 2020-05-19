const readlineSync = require("readline-sync");

let big = 0;
let small = 0;
let str = readlineSync.question("str?\n> ");
    
 
for (let i = 0; i < str.length; i++) {
    let letter = str[i];
    if (letter >= `A` && letter <= `Z`) {
        big += 1;
    }
    if (letter >= `a` && letter <= `z`) {
        small += 1;
    }
}

console.log("big: " + big);
console.log(`small: ` + small);