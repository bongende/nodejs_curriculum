const express = require("express");
const app = express();
const path = require("path");




const getTimeStamp = (url, req) => {
	console.log(`${req} at ${url} was done at ${new Date().toISOString()}`);
}

const middleware = (req, res, next) => {
	getTimeStamp(req.url, req); // see it later
	
	next();
}


app.use(middleware);

// set the view engine
app.set("view engine", "ejs");

// set directory for the view
//

app.set("views", path.join(__dirname, "views"));

const products = [
  {
    "id": 1,
    "title": "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
    "price": 109.95,
  },
  {
    "id": 2,
    "title": "Mens Casual Premium Slim Fit T-Shirts ",
    "price": 22.3,
    
  },
  {
    "id": 3,
    "title": "Mens Cotton Jacket",
    "price": 55.99,
    
  },
  {
    "id": 4,
    "title": "Mens Casual Slim Fit",
    "price": 15.99,
  },
  {
    "id": 5,
    "title": "John Hardy Women's Legends Naga Gold & Silver Dragon Station Chain Bracelet",
    "price": 695,
  },
  {
    "id": 6,
    "title": "Solid Gold Petite Micropave ",
    "price": 168,
  }
]


app.get("/", (req, res) => {
	res.render("home", {title : "home", products});
});

app.get("/about", (req, res) => {
	res.render("about", {title : "about"});
});

const port = 3000;

app.listen(port, () => {
	console.log(`server running on port ${port}`)
});

