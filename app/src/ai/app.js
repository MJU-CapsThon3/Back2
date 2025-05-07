import React, { useState, useEffect } from 'react';
import { PieChart, Pie, Cell, Tooltip, Legend } from 'recharts';
import { io } from 'socket.io-client';

const socket = io('http://localhost:5000');

function App() {
    const [inputText, setInputText] = useState('');
    const [emotionResult, setEmotionResult] = useState(null);
    const [emotionCode, setEmotionCode] = useState(null);

    const COLORS = ["#00C49F", "#FF8042", "#FF5722", "#FFC107"];

    useEffect(() => {
        socket.on('analyze_result', (data) => {
            if (data.error) {
                setEmotionResult('분석 실패');
                return;
            }

            const code = data.emotion;
            setEmotionCode(code);
            setEmotionResult(getEmotionLabel(code));
        });

        return () => {
            socket.off('analyze_result');
        };
    }, []);

    const getEmotionLabel = (code) => {
        switch (code) {
            case 0:
                return "부정";
            case 1:
                return "긍정";
            case 2:
                return "중립";
            case 3:
                return "분노";
            case 4:
                return "흥분";
            default:
                return "알 수 없음";
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        socket.emit('analyze_text', inputText);
    };

    // 데이터 설정: 각 감정 코드에 맞는 데이터 추가
    const data = [
        { name: "긍정", value: emotionCode === 1 ? 1 : 0 },
        { name: "부정", value: emotionCode === 0 ? 1 : 0 },
        { name: "중립", value: emotionCode === 2 ? 1 : 0 },
        { name: "분노", value: emotionCode === 3 ? 1 : 0 },
        { name: "흥분", value: emotionCode === 4 ? 1 : 0 },
    ];

    return (
        <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", background: "#f5f5f5" }}>
            <h1 style={{ fontSize: "2rem", marginBottom: "1rem" }}>🧠 감정 분석기 (테스트)</h1>

            <form onSubmit={handleSubmit} style={{ display: "flex", gap: "1rem", marginBottom: "2rem" }}>
                <input
                    type="text"
                    value={inputText}
                    onChange={(e) => setInputText(e.target.value)}
                    placeholder="분석할 문장을 입력하세요"
                    style={{
                        padding: "0.8rem",
                        borderRadius: "8px",
                        border: "1px solid #ccc",
                        width: "300px",
                        fontSize: "1rem",
                    }}
                />
                <button
                    type="submit"
                    style={{
                        backgroundColor: "#00C49F",
                        color: "white",
                        padding: "0.8rem 1.2rem",
                        borderRadius: "8px",
                        border: "none",
                        cursor: "pointer",
                        fontSize: "1rem",
                    }}
                >
                    분석
                </button>
            </form>

            {emotionResult && (
                <div style={{ marginBottom: "2rem", textAlign: "center" }}>
                    <h2 style={{ fontSize: "1.5rem" }}>결과: <span style={{ color: getEmotionColor(emotionCode) }}>{emotionResult}</span></h2>

                    {emotionCode === 0 && (
                        <div style={{
                            marginTop: "1rem",
                            padding: "1rem",
                            backgroundColor: "#FFEBEE",
                            border: "2px solid #F44336",
                            color: "#B71C1C",
                            borderRadius: "10px",
                            fontWeight: "bold",
                            fontSize: "1.2rem"
                        }}>
                            ⚠️ 부정적 감정 감지! 주의가 필요합니다.
                        </div>
                    )}
                    {emotionCode === 3 && (
                        <div style={{
                            marginTop: "1rem",
                            padding: "1rem",
                            backgroundColor: "#FFCDD2",
                            border: "2px solid #D32F2F",
                            color: "#B71C1C",
                            borderRadius: "10px",
                            fontWeight: "bold",
                            fontSize: "1.2rem"
                        }}>
                            ⚠️ 분노 감지! 감정 조절이 필요합니다.
                        </div>
                    )}
                    {emotionCode === 4 && (
                        <div style={{
                            marginTop: "1rem",
                            padding: "1rem",
                            backgroundColor: "#FFF3E0",
                            border: "2px solid #FF8F00",
                            color: "#BF360C",
                            borderRadius: "10px",
                            fontWeight: "bold",
                            fontSize: "1.2rem"
                        }}>
                            ⚠️ 흥분 상태입니다. 차분히 대화를 이어가세요.
                        </div>
                    )}
                </div>
            )}

            {emotionResult && (
                <PieChart width={300} height={300}>
                    <Pie
                        data={data}
                        cx="50%"
                        cy="50%"
                        innerRadius={50}
                        outerRadius={100}
                        fill="#8884d8"
                        paddingAngle={5}
                        dataKey="value"
                        label
                    >
                        {data.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                    </Pie>
                    <Tooltip />
                    <Legend />
                </PieChart>
            )}
        </div>
    );
}

const getEmotionColor = (code) => {
    switch (code) {
        case 0:
            return "#FF5722";  // 부정
        case 1:
            return "#4CAF50";  // 긍정
        case 2:
            return "#FFC107";  // 중립
        case 3:
            return "#D32F2F";  // 분노
        case 4:
            return "#FF8F00";  // 흥분
        default:
            return "#9E9E9E";  // 기본 색상
    }
};

export default App;
