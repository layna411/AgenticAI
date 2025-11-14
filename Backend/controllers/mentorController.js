const Groq = require("groq-sdk");
const groq = new Groq({ apiKey: process.env.GROQ_API_KEY });

async function suggestPaths(req, res) {
  try {
    const { profileSummary, weakAreas } = req.body;

    const prompt = `Create a 6-week learning path for this profile:\n${profileSummary}\n\nWeak areas: ${weakAreas}`;

    const response = await groq.chat.completions.create({
      model: "llama-3.1-8b-instant",
      messages: [{ role: "user", content: prompt }],
    });

    res.json({ plan: response.choices[0].message.content });
  } catch (err) {
    res.status(500).json({ error: "Server Error", details: err.message });
  }
}

module.exports = { suggestPaths };
