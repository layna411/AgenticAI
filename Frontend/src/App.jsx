import React from "react";
import PdfUploader from "./components/PdfUploader";
import QuizGenerator from "./components/QuizGenerator";
import MentorSuggestions from "./components/MentorSuggestions";
import ProgressDashboard from "./components/ProgressDashboard";
import "./style.css";

export default function App() {
  return (
    <div className="container">
      <h1>Smart LMS - Agentic Learning</h1>

      <div className="grid">
        <div>
          <PdfUploader />
        </div>

        <div>
          <QuizGenerator />
          <MentorSuggestions />
          <ProgressDashboard />
        </div>
      </div>
    </div>
  );
}
