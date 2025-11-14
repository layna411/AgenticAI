let userProgress = {};

function getProgress(req, res) {
  const { userId } = req.params;
  res.json(userProgress[userId] || { message: "No data" });
}

function updateProgress(req, res) {
  const { userId, progress } = req.body;
  userProgress[userId] = { ...(userProgress[userId] || {}), ...progress };
  res.json({ ok: true, data: userProgress[userId] });
}

module.exports = { getProgress, updateProgress };
