import React, { useState, useEffect } from 'react';
import { PieChart, Pie, Cell, Tooltip, Legend } from 'recharts';
import { io } from 'socket.io-client';

const socket = io('http://localhost:5000');

function App() {
  const [inputText, setInputText] = useState('');
  const [emotionResult, setEmotionResult] = useState(null);
  const [emotionCode, setEmotionCode] = useState(null);

  const COLORS = ["#00C49F", "#FF8042"];

  useEffect(() => {
    socket.on('analyze_result', (data) => {
      if (data.error) {
        setEmotionResult('분석 실패');
        return;
      }

      const code = data.emotion;
      setEmotionCode(code);
      setEmotionResult(code === 0 ? "부정" : "긍정");
    });

    return () => {
      socket.off('analyze_result');
    };
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    socket.emit('analyze_text', inputText);
  };

  const data = [
    { name: "긍정", value: emotionCode === 1 ? 1 : 0 },
    { name: "부정", value: emotionCode === 0 ? 1 : 0 },
  ];

  return (
    <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", background: "#f5f5f5" }}>
      <h1 style={{ fontSize: "2rem", marginBottom: "1rem" }}>🧠 감정 분석기 (실시간)</h1>

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
          <h2 style={{ fontSize: "1.5rem" }}>결과: <span style={{ color: emotionCode === 0 ? "#FF5722" : "#4CAF50" }}>{emotionResult}</span></h2>

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

export default App;
