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

const SERVER_URL = 'http://localhost:8000';

// 욕설 필터링
app.post('/filter', async (req, res) => {
    try {
        const { text } = req.body;
        const response = await axios.post(`${SERVER_URL}/filter`, { text });
        res.json(response.data);
    } catch (error) {
        console.error("Error filtering text:", error);
        res.status(500).json({ error: 'Error filtering text' });
    }
});


// 감정 분석

app.post('/analyze', async (req, res) => {
    try {
        const { text } = req.body;
        const response = await axios.post(`${SERVER_URL}/analyze`, { text });
        res.json(response.data);
    } catch (error) {
        console.error("Error analyzing text:", error);
        res.status(500).json({ error: 'Error analyzing text' });
    }
});


// 토론 분석
app.post('/analyze_debate', async (req, res) => {
    try {
        const { topic, content } = req.body;
        const response = await axios.post(`${SERVER_URL}/analyze_debate`, { topic, content });
        res.json(response.data);
    } catch (error) {
        console.error("Error analyzing debate:", error);
        res.status(500).json({ error: 'Error analyzing debate' });
    }
});

// 웹소켓
io.on('connection', (socket) => {
    console.log('🔌 WebSocket 연결됨');

    // 욕설 필터링
    socket.on('filter_text', async (text) => {
        try {
            const response = await axios.post(`${SERVER_URL}/filter`, { text });
            socket.emit('filter_result', response.data);
        } catch (error) {
            console.error("Error filtering text:", error);
            socket.emit('filter_result', { error: '필터링 실패' });
        }
    });

    // 감정 분석
    socket.on('analyze_text', async (text) => {
        try {
            const response = await axios.post(`${SERVER_URL}/analyze`, { text });
            socket.emit('analyze_result', response.data);
        } catch (error) {
            console.error("Error analyzing text:", error);
            socket.emit('analyze_result', { error: '분석 실패' });
        }
    });

    // 토론 분석
    socket.on('analyze_debate', async (data) => {
        try {
            const { topic, content } = data;
            const response = await axios.post(`${SERVER_URL}/analyze_debate`, { topic, content });
            socket.emit('analyze_debate_result', response.data);
        } catch (error) {
            console.error("Error analyzing debate:", error);
            socket.emit('analyze_debate_result', { error: '토론 분석 실패' });
        }
    });

    socket.on('disconnect', () => {
        console.log('❌ WebSocket 연결 종료');
    });
});

server.listen(5000, () => {
    console.log('Server is running on port 5000');
});
