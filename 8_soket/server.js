const express = require("express");
const { createServer } = require("node:http");
const { Server } = require("socket.io");

const app = express();

const server = createServer(app);

// initialte Socket.io and attach it to the http server

const io = new Server(server);

app.use(express.static("public"));

const users = new Set();

io.on("connection", (socket) => {
  console.log("A user is now connected");

  // handle user when they join the chat

  socket.on("join", (username) => {
    users.add(username);

    //broadcast to all users that a new user has joined
    io.emit("userJoined", username);

    // send the updated userlist to all clinets

    io.emit("userList", Array.from(users));
  });

  // handle incoming chat messages

  //handle user's disconnexion
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servet is now listening at port: ${PORT}`);
});
