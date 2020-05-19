const readlineSync = require("readline-sync");

// let str = `  Hello    my name    ` 

let str = readlineSync.question(`Write a string\n> `);
let strnew = ""; 

for ( let i = 0; i < str.length; ++i) {
    if (str[i - 1] !== ' ' || str[i] !== ' ') {
        strnew += str[i];
    } 
}
console.log(strnew);