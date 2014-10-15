var fs = require("fs")


var readObj = JSON.parse(fs.readFileSync("file.json", "utf8"));


console.log(readObj);
