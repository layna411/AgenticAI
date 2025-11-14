const router = require("express").Router();
const { suggestPaths } = require("../controllers/mentorController");

router.post("/suggest", suggestPaths);

module.exports = router;
