const readlineSync = require("readline-sync");

n = 3
let words = [];

for (let i = 0; i < n; ++i) {
    let word = readlineSync.question(`word?\n> `);
    words.push(word);
}
console.log(words.join(`,`));