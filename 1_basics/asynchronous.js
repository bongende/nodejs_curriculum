// Review of callback


// Promises


// Async Await


// Event Emiters


const EventEmiter = require("events");

const firstEmiter = new EventEmiter();

// Register a listener


firstEmiter.on("greet",  (name) => {
	console.log(`Hello ${name}`);
});

firstEmiter.emit("greet", "Kilimanjaro");

// Custom listener
//

 class MyCustomEmiter extends EventEmiter {
	constructor() {
		super();
		this.greeting = "Hello";
	}

	greet(name) {
		this.emit("greeting", `${this.greeting}, ${name}`);
		
	}
 }

const myCustomEmiter = new MyCustomEmiter();

myCustomEmiter.on("greeting", (name) => {
console.log("Greeting Event: " , name );
});

myCustomEmiter.greet("Rwenzori");




































