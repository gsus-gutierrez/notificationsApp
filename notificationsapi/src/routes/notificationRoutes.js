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
    if (req.body.notifierid === req.body.actorid) {
      res
        .status(409)
        .send(
          "There cant be a notification with the same notifier and actor id"
        );
    }
    const notifierExists= await AppUser.findByPk(req.body.notifierid)
    const actorExists = await AppUser.findByPk(req.body.actorid)
    console.log(notifierExists, actorExists)
    const newNotification = await Notification.create({ ...req.body });
    res.status(200).send(newNotification);
  } catch (error) {
    console.log(error)
    res.status(400).send(error);
  }
});

module.exports = router;
