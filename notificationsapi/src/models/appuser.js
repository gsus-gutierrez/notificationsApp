module.exports = (sequelize, DataTypes) => {
  const AppUser = sequelize.define(
    "AppUser",
    {
      appuserid: {
        type: DataTypes.UUID,
        primaryKey: true,
        unique: true,
        defaultValue: DataTypes.UUIDV4,
      },
      first_name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      last_name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      tableName: "appuser",
      timestamps: true,
      underscored: true,
    }
  );
  return AppUser;
};
