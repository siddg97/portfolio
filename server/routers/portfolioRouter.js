var express = require("express");
var router = express.Router();

const {
  getUserData,
  getTopRepos,
  getLangStars,
  getLangStats,
} = require("../utils");

router.get("/", (_, res) => {
  getUserData(res);
});

router.get("/lang-stats", (_, res) => {
  getLangStats(res);
});

router.get("/lang-stars", (_, res) => {
  getLangStars(res);
});

router.get("/top-repos", (req, res) => {
  getTopRepos(res, "stargazers_count");
});

// router.get("/repo-stats", (_, res) => {
//   me.repoStats(ghCallback(res));
// });

module.exports = router;
