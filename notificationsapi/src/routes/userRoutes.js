const { db } = require("../models/index.js");
const router = require("express").Router();

const AppUser = db.appuser;
const Notification = db.notification;

router.get("/users", async (req, res) => {
  try {
    const appUsers = await AppUser.findAll({
      include: [
        {
          model: Notification,
          as: "mygeneratednotifications",
        },
        {
          model: Notification,
          as: "mynotifications",
        },
      ],
    });
    res.status(200).send(appUsers);
  } catch (error) {
    res.status(400).send(error);
  }
});

router.get("/user/:id", async (req, res) => {
  try {
    const user = await AppUser.findOne({
      where: { appuserid: req.params.id },
      include: [
        {
          model: Notification,
          as: "mygeneratednotifications",
        },
        {
          model: Notification,
          as: "mynotifications",
        },
      ],
    });
    if (!user) res.status(404).send("User not found");
    else res.status(200).send(user);
  } catch (error) {
    console.error(error);
    res.status(400).send(error);
  }
  0;
});

router.post("/user", async (req, res) => {
  try {
    const exists = await AppUser.findOne({
      where: {
        email: req.body.email,
      },
    });
    if (exists) {
      res.status(409).send("There is an existing user with that email");
      return;
    }
    const newUser = await AppUser.create({ ...req.body });
    res.status(200).send(newUser);
  } catch (error) {
    res.status(400).send(error);
  }
});

router.put("/user/:id", async (req, res) => {
  try {
    const user = await AppUser.findByPk(req.params.id);
    if (!user) res.status(404).send("User not found");
  } catch (error) {}
});

module.exports = router;
