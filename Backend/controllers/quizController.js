const Groq = require("groq-sdk");
const groq = new Groq({ apiKey: process.env.GROQ_API_KEY });

async function generateQuiz(req, res) {
  try {
    const { topic, numQuestions } = req.body;

    if (!topic)
      return res.status(400).json({ error: "Topic is required" });

    const prompt = `Generate ${numQuestions || 5} MCQ quiz questions about "${topic}". 
Each question must have:
- 4 options (A, B, C, D)
- Correct answer marked
- Short explanation.`;

    const response = await groq.chat.completions.create({
      model: "llama-3.1-8b-instant",
      messages: [{ role: "user", content: prompt }],
    });

    res.json({ quiz: response.choices[0].message.content });
  } catch (err) {
    res.status(500).json({ error: "Server Error", details: err.message });
  }
}

module.exports = { generateQuiz };
