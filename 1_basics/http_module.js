// HTTP module



const http = require("http");

/*

const server = http.createServer((req, res) => {
	console.log(req, "request");
	res.writeHead(200, {"Content-Type" : "text/plain"})
	res.end("Hello nodejs from Http module");
});


const port = 3000;
server.listen(port, () => {
	console.log(`server is now listening to port ${port}`);
});

*/

// Routes

const server = http.createServer((req, res) => {
	const url = req.url;

	if (url === "/") {
		res.writeHead(200, {"Content-Type" : "text/plain"});
		res.end("Welcome to the Home page");
	} else if (url === "/projects") {
		res.writeHead(200, {"Content-Type" : "text/plain"});
		res.end("Welcome to the Project page where  you'll see all the things i'm working about");
	}
	else {
		res.writeHead(404, {"Content-Type" : "text/plain"});
		res.end("OPS, err 404, this page doesn't exist");
	}
})



const PORT = 3000;

server.listen(PORT, () => {
	console.log(`server is now listenin to port ${PORT}.`);
})













