module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define("User", {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    passwordResetToken: {
      type: DataTypes.STRING,
      select: false,
    },
    passwordResetExpires: {
      type: DataTypes.DATE,
      select: false,
    },
    admin: {
      type: DataTypes.TINYINT,
      allowNull: true,
    },
  });

  User.associate = (models) => {
    User.hasMany(models.Skill, {
      foreignKey: "idUser",
      constraint: true,
    });
  };

  User.associate = (models) => {
    User.hasMany(models.Profile, {
      foreignKey: "idUser",
      constraint: true,
    });
  };

  User.associate = (models) => {
    User.belongsToMany(models.Project, { through: models.UserProject });
  };

  return User;
};
