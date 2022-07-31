const { pool } = require("../models");

const router = require("express").Router();

router.get("/db", (req, res) => {
  res.send('hsfsdis');
});

module.exports = {
  router,
};
