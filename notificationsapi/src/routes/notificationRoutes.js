const { sequelize } = require("../models");
const { Notification } = require("../models/notification");
const router = require("express").Router();

router.get("/notifications", async (req, res) => {
  try {
    const notifications = await Notification.findAll();
    res.status(200).send(notifications);
  } catch (error) {
    res.status(400).send(error);
  }
});

router.post("/notification", async (req, res) => {
  try {
    const newNotification = await Notification.create({ ...req.body });
    res.status(200).send(newNotification);
  } catch (error) {
    res.status(400).send(error);
  }
});

module.exports = router;
