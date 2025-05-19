const express = require('express');
const http = require('http');
const { Server } = require('socket.io');
const axios = require('axios');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

const server = http.createServer(app);
const io = new Server(server, {
    cors: {
        origin: "*",
    }
});

const PYTHON_SERVER_URL = 'http://localhost:8000';

app.post('/analyze', async (req, res) => {
    try {
        const { text } = req.body;
        const response = await axios.post(`${PYTHON_SERVER_URL}/analyze`, { text });
        res.json(response.data);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error analyzing text' });
    }
});

// WebSocket 연결
io.on('connection', (socket) => {
    console.log('🔌 WebSocket 연결됨');

    socket.on('analyze_text', async (text) => {
        try {
            const response = await axios.post(`${PYTHON_SERVER_URL}/analyze`, { text });
            socket.emit('analyze_result', response.data);
        } catch (error) {
            console.error(error);
            socket.emit('analyze_result', { error: '분석 실패' });
        }
    });

    socket.on('disconnect', () => {
        console.log('❌ WebSocket 연결 종료');
    });
});

server.listen(5000, () => {
    console.log('Server is running on port 5000');
});
