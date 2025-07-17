const fs = require("fs");
const path = require("path");


const dataFolder = path.join(__dirname, "datas");

if (!fs.existsSync(dataFolder)) {
	fs.mkdirSync(dataFolder);
	console.log("dataFolder created!");
}

const filePath = path.join(dataFolder, "example.txt");
// all of the previous operations are synchonous way

fs.writeFileSync(filePath, "Hello from nodejs")
console.log("file created succefully");

const readContentFromFile = fs.readFileSync(filePath, "utf8");
console.log("file contents: \n", readContentFromFile);

fs.appendFileSync(filePath, "\nHere is a new line added to the file, ouaoh, it's cool");
console.log("new line added!!");

console.log("upadted datas", fs.readFileSync(filePath, "utf8"));


// async way of managing files

const asyncFilePath = path.join(dataFolder, "async-example.txt");
fs.writeFile(asyncFilePath, "Hello from an assync way of creating file\n", (err) => {
	if (err)  throw err 
	console.log("Async file created!!!");
	
	fs.readFile(asyncFilePath, "utf8", (err, data) => {
		if (err) throw err;
		console.log("Async file contents: ", data);

		fs.appendFile(asyncFilePath, "This is another line to the asynchronous created file, here we go!!!", (err) => {
			if (err) throw err;
			console.log("file content added successfully!!");
		})
	})
})




