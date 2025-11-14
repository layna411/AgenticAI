import React, { useState } from "react";
import API from "../api";

export default function MentorSuggestions() {
  const [profile, setProfile] = useState("");
  const [weak, setWeak] = useState("");
  const [plan, setPlan] = useState("");
  const [loading, setLoading] = useState(false);

  const getPlan = async () => {
    if (!profile) return alert("Enter your profile summary!");

    setLoading(true);
    setPlan("");

    try {
      const res = await API.post("/mentor/suggest", {
        profileSummary: profile,
        weakAreas: weak,
      });

      setPlan(res.data.plan);
    } catch (err) {
      console.error(err);
      alert("Error while generating learning plan");
    }

    setLoading(false);
  };

  return (
    <div className="card">
      <h3>Mentor Suggestions</h3>

      <textarea
        placeholder="Describe your profile (e.g., student in CSE...)"
        value={profile}
        onChange={(e) => setProfile(e.target.value)}
      />

      <input
        placeholder="Weak areas (comma separated)"
        value={weak}
        onChange={(e) => setWeak(e.target.value)}
      />

      <button onClick={getPlan} disabled={loading}>
        {loading ? "Generating..." : "Get Learning Path"}
      </button>

      {plan && (
        <div>
          <h4>AI Mentor Plan</h4>
          <pre>{plan}</pre>
        </div>
      )}
    </div>
  );
}
