const express = require("express");
const router = express.Router();
const multer = require("multer");

const { generateSummary, answerQuestion } = require("../controllers/tutorController");

// Store PDFs in uploads/ folder
const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, "uploads/"),
  filename: (req, file, cb) => cb(null, Date.now() + "-" + file.originalname)
});

const upload = multer({ storage: storage });

router.post("/summary", upload.single("file"), generateSummary);
router.post("/ask", answerQuestion);

module.exports = router;
