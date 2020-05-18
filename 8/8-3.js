const readlineSync = require("readline-sync");

let big = 0;
let small = 0;
let str = readlineSync.question("str?\n> ");
    
 
for (let i = 0; i < str.length; i++) {
    let char = str[i];
    if (char >= "A" && char <= "Z") {
        ++big;
    }
    if (char >= `a` && char <= `z`) {
        ++small;
    }
}

console.log("big: " + big);
console.log(`small: ` + small);