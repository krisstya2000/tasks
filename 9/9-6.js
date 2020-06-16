const fs = require("fs");
const readlineSync = require("readline-sync");

let toggle = parseInt(readlineSync.question("toggle?\n> "));
let todos = JSON.parse(fs.readFileSync("todos.json"));

if (toggle > todos.length) {
    console.log(`wrong`);
} else {
    for (let i = 0; i < todos.length; ++i) {
        if (toggle - 1 === i) {
            todos[i].complited = !todos[i].complited
            let complitedStr;
            if (todos[i].complited) {
                complitedStr = `[x]`;
            } else {
                complitedStr = `[ ]`;
            }

            console.log(complitedStr + ` ` + num + `. ` + todos[i].title);
        }
    }
    fs.writeFileSync("todos.json", JSON.stringify(todos));
}


