const express = require("express");

const app = express();


/*
app.get("/", (req, res) => {
	res.send("Hello world from Express.js");
});

const PORT = 3000;

app.listen(PORT, () => {
	console.log(`server running on port ${PORT}`);
});

*/

// Application level setting

// Creating routes

//root route


/*
app.get("/", (req, res) => {
	res.send("Welcome to the Home Express created page");
})

const PORT  = 3000; 

app.listen(PORT, () => {
	console.log(`server running on port ${PORT}`);
});

*/

// MIddleware
//
// see documentation


/*

const myFirstMiddleware =(req, res, next) => {
	console.log("this first middleware will run on every request");
	
	next();
}

app.use(myFirstMiddleware);

app.get("/", (resq, res) => {
	res.send("This is the home page")
});

app.get("/about", (req, res) => {
	res.send("the about page");
});

const port = 3000;

app.listen(port, () => {
	console.log("Server running on port", port)
});

*/

// custom middleware






const requestTimeStamp = ( req, res, next) => {

	const timeStamp = new Date().toISOString();

	console.log(`${timeStamp} from ${req.method} to ${req.url}.` );
	next();
}

app.use(requestTimeStamp);

app.get("/" ,(req, res) => {
	res.send("This the home page preceded by a request to timestamp")
})

app.listen(3000, () => {
	console.log("server running on port 3000")
});










































