import React, { useState, useEffect } from 'react';
import { PieChart, Pie, Cell, Tooltip, Legend } from 'recharts';
import { io } from 'socket.io-client';

const socket = io('http://localhost:5000');

// 감정별 색상 (3-class 모델에 맞춤)
const COLORS = {
  부정: "#FF6B6B",
  중립: "#B0BEC5",
  긍정: "#4CAF50",
};

function App() {
  const [inputText, setInputText] = useState('');
  const [emotionResult, setEmotionResult] = useState(null);
  const [probabilities, setProbabilities] = useState(null);

  useEffect(() => {
    socket.on('analyze_result', (data) => {
      if (data.error) {
        setEmotionResult("분석 실패");
        return;
      }

      setEmotionResult(data.emotion);
      setProbabilities(data.probabilities);
    });

    return () => {
      socket.off('analyze_result');
    };
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    socket.emit('analyze_text', inputText);
  };

  const chartData = probabilities
    ? Object.entries(probabilities).map(([label, value]) => ({
      name: label,
      value: value,
    }))
    : [];

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
          <h2 style={{ fontSize: "1.5rem" }}>
            결과:
            <span style={{ color: COLORS[emotionResult] || "#000" }}>
              {emotionResult === "긍정" ? "긍정" : emotionResult === "부정" ? "부정" : "중립"}
            </span>
          </h2>

          {emotionResult === "부정" && (
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
              ⚠️ 부정 감정 감지! 주의가 필요합니다.
            </div>
          )}

          {emotionResult === "긍정" && (
            <div style={{
              marginTop: "1rem",
              padding: "1rem",
              backgroundColor: "#E8F5E9",
              border: "2px solid #4CAF50",
              color: "#388E3C",
              borderRadius: "10px",
              fontWeight: "bold",
              fontSize: "1.2rem"
            }}>
              😊 긍정 감정이 감지되었습니다! 계속해서 좋은 감정을 유지하세요.
            </div>
          )}
        </div>
      )}

      {chartData.length > 0 && (
        <PieChart width={350} height={350}>
          <Pie
            data={chartData}
            cx="50%"
            cy="50%"
            innerRadius={50}
            outerRadius={100}
            paddingAngle={5}
            dataKey="value"
            label
          >
            {chartData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[entry.name] || "#B0BEC5"} />
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
