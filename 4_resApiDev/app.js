const express = require("express");
const mongoose = require("mongoose");
const { DB_PASSWORD } = require("../sens_Datas");

const app = express();

mongoose
  .connect(
    `mongodb+srv://christobongende2105:${DB_PASSWORD}@cluster0.ayy1b9i.mongodb.net/`
  )
  .then(console.log("database connected successfully"))
  .catch((err) => {
    console.log(err);
  }); // Have to remove the password from the app

/*

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


// get a single product

app.get("/products/product/:id", (req, res) => {	
	const product = products.find(product => product.id === Number(req.params.id));
	if (!product) res.json({message : "product doesn't exist please try another id", status : 404});
	else res.json(product);
});


// add a new product

app.post("/add", (res, price) => {
	products.push({id: products.length + 1, title, price});
	res.

})

*/

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  age: Number,
  isActive: Boolean,
  tags: [String],
  createdAt: { type: Date, default: Date.now },
});

// create User model

const User = mongoose.model("User", userSchema);

async function runQueryExxamples() {
  try {
    // Create a new Document

    /*
    
    const newUser = await User.create({
      name: "user1",
      email: "user1@mail.com",
      age: 23,
      isActive: true,
      tags: ["engineer", "mathematic", "sciences"],
    });
    
    console.log("New user created: ", newUser);

    */

    const allUSers = await User.find({});

    //   console.log(allUSers);

    const getNonActiveUses = await User.findOne({ isActive: true });

    console.log(getNonActiveUses);

    const limitedUsers = await User.find()
      .select("name email -_id")
      .limit(3)
      .skip(1);

    console.log(limitedUsers);
  } catch (err) {
    console.log("Error -> ", err);
  } finally {
    await mongoose.connection.close();
  }
}

runQueryExxamples();
