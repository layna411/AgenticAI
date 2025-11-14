import React, { useState, useEffect } from "react";
import API from "../api";

export default function ProgressDashboard() {
  const userId = "user123"; // You can change or make dynamic
  const [progress, setProgress] = useState(null);
  const [newTopic, setNewTopic] = useState("");
  const [score, setScore] = useState("");

  // Fetch progress on load
  useEffect(() => {
    fetchProgress();
  }, []);

  const fetchProgress = async () => {
    try {
      const res = await API.get(`/progress/user/${userId}`);
      setProgress(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  const updateProgress = async () => {
    if (!newTopic && !score) {
      return alert("Enter topic or score to update");
    }

    try {
      const updateData = {
        userId,
        progress: {
          ...(newTopic && { topic: newTopic }),
          ...(score && { score }),
        },
      };

      await API.post("/progress/update", updateData);
      fetchProgress(); // refresh UI
      setNewTopic("");
      setScore("");
    } catch (err) {
      console.error(err);
      alert("Error updating progress");
    }
  };

  return (
    <div className="card">
      <h3>Progress Dashboard</h3>

      {!progress || progress.message ? (
        <p>No progress yet. Add your first progress below.</p>
      ) : (
        <div>
          {progress.topic && <p><b>Last Topic:</b> {progress.topic}</p>}
          {progress.score && <p><b>Last Score:</b> {progress.score}</p>}
        </div>
      )}

      <h4>Update Progress</h4>
      <input
        placeholder="Completed Topic"
        value={newTopic}
        onChange={(e) => setNewTopic(e.target.value)}
      />

      <input
        placeholder="Score"
        value={score}
        onChange={(e) => setScore(e.target.value)}
      />

      <button onClick={updateProgress}>Update</button>
    </div>
  );
}
