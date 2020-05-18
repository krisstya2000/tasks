const readlineSync = require("readline-sync");

let words = [];
let name = readlineSync.question("Whar is your name?\n> ");
console.log("Hi, " + name + "!");

let mail = readlineSync.question("Write your mail\n> ");
console.log("ok, " + mail);

let color = readlineSync.question(`Your favorite color?\n> `);
console.log (color + ` is a perfect color\n> ` );


