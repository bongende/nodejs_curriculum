// path module
//

const path = require("path");

console.log("Directory name: ", path.dirname(__filename));
console.log("Filename: ", path.basename(__filename));
console.log("File extension: ", path.extname(__filename));


const joinPath = path.join("/user", "documents", "node", "project");
console.log(joinPath);

const resolvePath = path.resolve("user", "documents", "node", "project");
console.log(resolvePath);

const normalizePath = path.normalize("/user/.document/../node/project");
console.log(normalizePath);
