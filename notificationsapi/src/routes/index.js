const userRouter = require('./userRoutes')
const notificationRouter = require('./notificationRoutes')
const router = require("express").Router();

router.use(userRouter)
router.use(notificationRouter)


module.exports = {
  router,
};
