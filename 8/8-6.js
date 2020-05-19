const readlineSync = require("readline-sync");

let str = readlineSync.question("str?\n> ");
let words = str.split(" ");

for (let word of words) {
    let revWord = "";
    for (let i = word.length - 1; i >= 0; --i) {
      revWord += word[i];
    }
    if ( revWord == word ) {
        console.log( true );
    } else {
        console.log(false);
    }
}

