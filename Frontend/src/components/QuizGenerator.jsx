import React, { useState } from "react";
import API from "../api";

export default function QuizGenerator() {
  const [topic, setTopic] = useState("");
  const [quiz, setQuiz] = useState("");
  const [loading, setLoading] = useState(false);

  const generate = async () => {
    if (!topic) return alert("Please enter a topic!");

    setLoading(true);
    setQuiz("");

    try {
      const res = await API.post("/quiz/generate", {
        topic,
        numQuestions: 5,
      });

      setQuiz(res.data.quiz);
    } catch (err) {
      console.error(err);
      alert("Error generating quiz");
    }

    setLoading(false);
  };

  return (
    <div className="card">
      <h3>Generate Quiz</h3>

      <input
        value={topic}
        placeholder="Enter topic or content"
        onChange={(e) => setTopic(e.target.value)}
      />

      <button onClick={generate} disabled={loading}>
        {loading ? "Generating..." : "Generate Quiz"}
      </button>

      {quiz && (
        <div>
          <h4>Quiz</h4>
          <pre>{quiz}</pre>
        </div>
      )}
    </div>
  );
}
