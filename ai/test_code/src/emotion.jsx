import React, { useState } from 'react';
import { PieChart, Pie, Cell, Tooltip, Legend } from 'recharts';

const COLORS = {
  "기쁨(행복한)": "#FF6384",
  "고마운": "#36A2EB",
  "설레는(기대하는)": "#FFCE56",
  "사랑하는": "#4BC0C0",
  "즐거운(신나는)": "#9966FF",
  "일상적인": "#FF9F40",
  "생각이 많은": "#C9CBCF",
  "슬픔(우울한)": "#FF9F99",
  "힘듦(지침)": "#339966",
  "짜증남": "#FF4444",
  "걱정스러운(불안한)": "#FFAA00"
};

export default function EmotionAnalyzer() {
  const [text, setText] = useState('');
  const [emotion, setEmotion] = useState(null);
  const [probs, setProbs] = useState(null);
  const API_URL = "http://localhost:8000";

  const analyzeEmotion = async () => {
    const res = await fetch(`${API_URL}/analyze`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ text })
    });
    const data = await res.json();
    setEmotion(data.emotion);
    setProbs(data.probabilities);
  };

  const chartData = probs
    ? Object.entries(probs).map(([name, value]) => ({ name, value }))
    : [];

  return (
    <div style={{ padding: 20, fontFamily: 'sans-serif' }}>
      <h2>감정 분석</h2>
      <input
        type="text"
        value={text}
        onChange={e => setText(e.target.value)}
        placeholder="문장을 입력"
        style={{ width: '60%', padding: 8 }}
      />
      <button onClick={analyzeEmotion} style={{ marginLeft: 8 }}>분석</button>

      {emotion && (
        <div style={{ marginTop: 8 }}>
          <h3>결과: <span>{emotion}</span></h3>
          <PieChart width={300} height={300}>
            <Pie
              data={chartData}
              dataKey="value"
              cx="50%"
              cy="50%"
              innerRadius={40}
              outerRadius={80}
              label
            >
              {chartData.map((e, i) => (
                <Cell key={i} fill={COLORS[e.name] || '#888'} />
              ))}
            </Pie>
            <Tooltip />
            <Legend />
          </PieChart>
        </div>
      )}
    </div>
  );
}
