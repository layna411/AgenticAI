import React, { useState } from "react";
import API from "../api";

export default function PdfUploader() {
  const [file, setFile] = useState(null);
  const [summary, setSummary] = useState("");
  const [loading, setLoading] = useState(false);
  const [filePath, setFilePath] = useState("");

  const upload = async () => {
    if (!file) return alert("Please select a PDF!");

    setLoading(true);
    setSummary("");

    try {
      const formData = new FormData();
      formData.append("file", file);

      const res = await API.post("/tutor/summary", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      setSummary(res.data.summary);
      setFilePath(res.data.filePath);

      console.log("File saved at:", res.data.filePath);
    } catch (err) {
      console.error(err);
      alert("Error uploading PDF");
    }

    setLoading(false);
  };

  return (
    <div className="card">
      <h3>Upload PDF</h3>

      <input
        type="file"
        accept="application/pdf"
        onChange={(e) => setFile(e.target.files[0])}
      />

      <button onClick={upload} disabled={loading}>
        {loading ? "Processing..." : "Upload & Summarize"}
      </button>

      {summary && (
        <div>
          <h4>Summary</h4>
          <pre>{summary}</pre>
        </div>
      )}
    </div>
  );
}
