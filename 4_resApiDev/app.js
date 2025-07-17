const express = require("express");


const app = express();


// Using the middleware 

app.use(express.json());

let products = [
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
];


// Main intro route

app.get("/", (req, res) => {
	res.json({ message : "Welcome to the Store api" });
});


// get all route
app.get("/products", (req, res) => { res.json(products)});

const PORT = 3000;

app.listen(PORT, () => {
	console.log(`server is now running on port ${PORT}`)
});



