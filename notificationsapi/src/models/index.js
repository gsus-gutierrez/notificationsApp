const { DataTypes, Sequelize } = require("sequelize");
const dbConfig = require("../config/dbConfig");

const sequelize = new Sequelize(dbConfig)
console.log(sequelize)
const db = {};

db.Sequelize = Sequelize
db.sequelize = sequelize

db.appuser = require("./appuser")(sequelize, DataTypes);
db.notification = require("./notification")(sequelize, DataTypes);

db.sequelize.sync({ force: false}).then(() => console.log("done!"))

db.appuser.hasMany(db.notification, { foreignKey: "notifierid", as: "mynotifications" })
db.appuser.hasMany(db.notification, { foreignKey: "actorid", as: "mygeneratednotifications" })

db.notification.belongsTo(db.appuser, {foreignKey: "notifierid", as: "notifier"})
db.notification.belongsTo(db.appuser, {foreignKey: "actorid", as: "actor"})

/* db.notification.belongsTo(db.appuser, {
  foreignKey: 'actorid',
  as: 'actor'
}) */

module.exports = {
  db,
};
