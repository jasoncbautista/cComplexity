var args = process.argv.slice(2);

console.log(args);
var fs = require("fs")


var readObj = JSON.parse(fs.readFileSync("file.json", "utf8"));


console.log(readObj);
