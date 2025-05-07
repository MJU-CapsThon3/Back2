// frontend/src/App.jsx
import React, { useState } from "react";
import axios from "axios";

function App() {
  const [debateText, setDebateText] = useState("");
  const [result, setResult] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:8000/analyze_debate", {
        content: debateText,
      });
      setResult(response.data.result);
    } catch (err) {
      console.error("Error:", err);
      setResult("분석에 실패했습니다.");
    }
  };

  return (
    <div style={{ padding: "2rem", fontFamily: "Arial" }}>
      <h1>💬 토론 요약 및 평가</h1>
      <form onSubmit={handleSubmit}>
        <textarea
          value={debateText}
          onChange={(e) => setDebateText(e.target.value)}
          rows={10}
          cols={60}
          placeholder="토론 내용을 입력하세요..."
          style={{ padding: "1rem", fontSize: "1rem", marginBottom: "1rem" }}
        />
        <br />
        <button type="submit" style={{ padding: "0.6rem 1.2rem", fontSize: "1rem" }}>
          분석 요청
        </button>
      </form>

      {result && (
        <div style={{ marginTop: "2rem", whiteSpace: "pre-line", backgroundColor: "#f0f0f0", padding: "1rem", borderRadius: "10px" }}>
          <h2>📊 결과</h2>
          <p>{result}</p>
        </div>
      )}
    </div>
  );
}

export default App;
