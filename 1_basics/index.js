
const lodash = require("lodash");


/*



console.log("first line of code");

setTimeout(()=> {
	console.log("message delayed of 2 seconds");
}, 2000);

console.log("this is the last line of code");
*/

// Node module system

//NPM



const names = ["jhon", "peter", "erick", "joe", "alex"];

const capitalNames = lodash.map(names, lodash.capitalize);


console.log(capitalNames);
