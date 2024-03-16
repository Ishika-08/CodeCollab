// router.js

const express = require('express');
const router = express.Router();
const path = require('path');
const { Server } = require('socket.io');
const http = require('http');
const { handleConnection } = require('../controllers/RoomController');

const app = express();
const server = http.createServer(app);
const io = new Server(server);

app.use(express.static('build'));
app.use((req, res, next) => {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

io.on('connection', (socket) => {
    handleConnection(socket, io);
});

module.exports = {
    router,
};
