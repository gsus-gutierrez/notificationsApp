/* Notification.associate = function (models) {
  Notification.belongsTo(models.AppUser, { foreignKey: "notifierid", as: "notifier" });
  Notification.belongsTo(models.AppUser, { foreignKey: "actorid", as: "actor" });
}; */

module.exports = (sequelize, DataTypes) => {
  const Notification = sequelize.define(
    "Notification",
    {
      notificationid: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
        allowNull: false,
        unique: true,
      },
      read: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false,
      },
      notification_type: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      tableName: "notification",
      timestamps: true,
      underscored: true,
    }
  );
  return Notification;
};
