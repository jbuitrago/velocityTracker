import http from "http";
import mongoose from 'mongoose';
import { Server } from "socket.io";
import app from "./app";
require('dotenv').config();
const server = http.createServer(app);
const io = new Server(server);


io.on("connection", (socket) => {
  console.log("a user connected");
});

// Conectar a MongoDB
mongoose.connect(`${process.env.MONGODB_URI}`, {})
.then(() => {
  console.log('Conexión a MongoDB establecida correctamente.');
})
.catch((error) => {
  console.error('Error al conectar a MongoDB:', error);
});

const port = process.env.PORT || 3000;

server.listen(port, () => {
  console.log(`Server is running on port ${port}`);
  
});
