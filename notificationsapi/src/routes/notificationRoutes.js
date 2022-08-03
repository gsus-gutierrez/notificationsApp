const { db } = require("../models/index");
const router = require("express").Router();

const Notification = db.notification;
const AppUser = db.appuser;

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
    console.log(req);
    if (req.body.notifierid === req.body.actorid) {
      res
        .status(409)
        .send(
          "There cant be a notification with the same notifier and actor id"
        );
      return;
    }
    const notifierExists = await AppUser.findByPk(req.body.notifierid);
    const actorExists = await AppUser.findByPk(req.body.actorid);
    const newNotification = await Notification.create({ ...req.body });
    res.status(200).send(newNotification);
  } catch (error) {
    console.log(error);
    res.status(400).send(error);
  }
});

router.put("/notification/:id", async (req, res) => {
  try {
    const notification = await Notification.findByPk(req.params.id);
    notification.read = !notification.read;
    const saved = await notification.save();
    console.log(saved);
    res.status(200).send(notification);
  } catch (error) {
    console.error(error);
    res.status(400).send(error);
  }
});

module.exports = router;
