/* const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("notificationsapp", "dbadmin", "dbadminpass", {
  host: "db",
  dialect: "postgres",
}); */

module.exports = {
  host: "db",
  username: "dbadmin",
  password: "dbadminpass",
  database: "notificationsapp",
  dialect: "postgres",
};
