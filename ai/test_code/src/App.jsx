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

export default function App() {
  const [text, setText] = useState('');
  const [emotion, setEmotion] = useState(null);
  const [probs, setProbs] = useState(null);

  const [filterText, setFilterText] = useState('');
  const [filterResult, setFilterResult] = useState(null);

  const [debate, setDebate] = useState('');
  const [debateResult, setDebateResult] = useState('');

  const [debateTopic, setDebateTopic] = useState('');
  const [debateOptionA, setDebateOptionA] = useState('');
  const [debateOptionB, setDebateOptionB] = useState('');

  // env 대체
  const API_URL = "http://localhost:8000";
  // const API_URL = "https://caps-ai-he1l.onrender.com";

  // 감정 분석 호출
  const analyzeEmotion = async () => {
    const res = await fetch(API_URL + '/analyze', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ text })
    });
    const data = await res.json();
    setEmotion(data.emotion);
    setProbs(data.probabilities);
  };

  // 욕설 필터링 호출
  const analyzeFilter = async () => {
    const res = await fetch(API_URL + '/filter', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ text: filterText })
    });
    const data = await res.json();
    setFilterResult(data);
  };

  // 토론 분석 호출
  const analyzeDebate = async () => {
    const res = await fetch(API_URL + '/analyze_debate', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ topic: debateTopic, content: debate })
    });
    const data = await res.json();
    setDebateResult(data.result);
  };
  const chartData = probs
    ? Object.entries(probs).map(([name, value]) => ({ name, value }))
    : [];

  return (
    <div style={{ padding: 20, fontFamily: 'sans-serif' }}>
      <h1>AI 기능 시연</h1>

      <section>
        <h2>0. 욕설 필터링</h2>
        <input
          type="text"
          value={filterText}
          onChange={e => setFilterText(e.target.value)}
          placeholder="필터링할 텍스트 입력"
          style={{ width: '60%', padding: 8 }}
        />
        <button onClick={analyzeFilter} style={{ marginLeft: 8 }}>검사</button>
        {filterResult && (
          <div style={{ marginTop: 8 }}>
            <p>욕설 포함: {filterResult.contains_profanity ? '예' : '아니오'}</p>
            <p>필터링 결과: {filterResult.filtered_text}</p>
          </div>
        )}
      </section>

      <hr />

      <section>
        <h2>1. 감정 분석</h2>
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
      </section>

      <hr />

      <section>
      <h2>2. 토론 요약 &amp; 평가</h2>
      <input
        type="text"
        value={debateTopic}
        onChange={e => setDebateTopic(e.target.value)}
        placeholder="토론 주제 입력"
        style={{ width: '100%', padding: 8, marginBottom: 8 }}
      />
      <textarea
        value={debate}
        onChange={e => setDebate(e.target.value)}
        placeholder="토론 내용을 입력"
        rows={6}
        style={{ width: '100%', padding: 8 }}
      />
      <button onClick={analyzeDebate} style={{ marginTop: 8 }}>요약 &amp; 점수화</button>
      {debateResult && (
        <pre style={{ background: '#f0f0f0', padding: 10, marginTop: 10 }}>
          {debateResult}
        </pre>
      )}
    </section>

    <section>
      <h2>3. 토론 주제 생성</h2>
      <button onClick={async () => {
        const res = await fetch(API_URL + '/generate_topic', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({})
        });
        const data = await res.json();
        setDebateTopic(data.topic);
        setDebateOptionA(data.option_a);
        setDebateOptionB(data.option_b);
      }} style={{ marginTop: 8 }}>토론 주제 생성</button>
      {debateTopic && (
        <div style={{ marginTop: 8 }}>
          <h3>{debateTopic}</h3>
        </div>
      )}
      {debateOptionA && (
        <div style={{ marginTop: 8 }}>
          <h3>{debateOptionA}</h3>
        </div>
      )}
      {debateOptionB && (
        <div style={{ marginTop: 8 }}>
          <h3>{debateOptionB}</h3>
        </div>
      )}
    </section>

    </div>
  );
}
