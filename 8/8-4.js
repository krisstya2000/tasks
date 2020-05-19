const readlineSync = require("readline-sync");

let str = readlineSync.question("str?\n> ");
let max = 0;
let length = 0;
let strmax = [];
let str2 = [];

for (let i = 0; i < str.length; i++) {
    let letter = str[i];
    if( letter !== ` `) {
        length += 1;
        str2.push(letter);
    } 
    if (length > max) {
        length = max;
        str2 = strmax;
    } else if (str[i] === ` `) {
        length = 0;
        str2 = [];
    }
}
console.log (strmax.join(""));