const express = require("express");
const router = express.Router();

// GET /info
router.get("/", (req, res) => {
  const slack_name = req.query.slack_name;
  const track = req.query.track;
  const current_day = new Date().toLocaleString("en-US", { weekday: "long" });
  const utc_time = new Date().toISOString().slice(0, -5) + 'Z';
  const github_file_url =
    "https://github.com/Felixdiamond/HNGx_Stage_One/blob/main/server.js";
  const github_repo_url = "https://github.com/Felixdiamond/HNGx_Stage_One";
  const status_code = 200;

  res.json({
    slack_name,
    current_day,
    utc_time,
    track,
    github_file_url,
    github_repo_url,
    status_code,
  });
});

module.exports = router;
