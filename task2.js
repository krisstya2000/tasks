const readlineSync = require("readline-sync");

let num = parseInt(readlineSync.question(`words count?\n> `));
let words = [];

for (let i = 0; i < num; ++i) {
    let word = readlineSync.question(`word?\n> `);
    words.push(word);
}
console.log(words.join(`,`));