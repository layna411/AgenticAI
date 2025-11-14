const { extractTextFromPdf } = require("../utils/pdfReader");
const Groq = require("groq-sdk");

const groq = new Groq({ apiKey: process.env.GROQ_API_KEY });

async function generateSummary(req, res) {
  try {
    if (!req.file) return res.status(400).json({ error: "No file uploaded" });

    const text = await extractTextFromPdf(req.file.path);

    const prompt = `Summarize the following PDF content in clear bullet points:\n\n${text}`;

    const response = await groq.chat.completions.create({
      model: "llama-3.1-8b-instant",
      messages: [{ role: "user", content: prompt }],
    });

    res.json({
      summary: response.choices[0].message.content,
      filePath: req.file.path,
    });
  } catch (err) {
    res.status(500).json({ error: "Server Error", details: err.message });
  }
}

async function answerQuestion(req, res) {
  try {
    const { filePath, question } = req.body;

    if (!filePath || !question)
      return res.status(400).json({ error: "Missing parameters" });

    const text = await extractTextFromPdf(filePath);

    const prompt = `Use this document to answer the question:\n\nDocument:\n${text}\n\nQuestion: ${question}`;

    const response = await groq.chat.completions.create({
      model: "llama-3.1-8b-instant",
      messages: [{ role: "user", content: prompt }],
    });

    res.json({ answer: response.choices[0].message.content });
  } catch (err) {
    res.status(500).json({ error: "Server Error", details: err.message });
  }
}

module.exports = { generateSummary, answerQuestion };
