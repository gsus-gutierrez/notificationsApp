const { pool } = require("../models");

const router = require("express").Router();

router.get("/db", (req, res) => {
  res.send('his');
});

module.exports = {
  router,
};
