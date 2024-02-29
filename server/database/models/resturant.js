module.exports = (sequelize, DataTypes) => {
  const search = sequelize.define(
    'resturant',
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      public_id: { type: DataTypes.UUID, unique: true, allowNull: false },
      url: { type: DataTypes.STRING, unique: true, allowNull: false },
      title: { type: DataTypes.STRING, unique: true, allowNull: false },
      description: { type: DataTypes.STRING, allowNull: false },
      thumbnail_image: { type: DataTypes.STRING, allowNull: true },
      created_by: { type: DataTypes.UUID, allowNull: true },
      updated_by: { type: DataTypes.UUID, allowNull: true },
      created_at: {
        allowNull: false,
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
      },
      updated_at: {
        allowNull: false,
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
      },
    },
    {
      freezeTableName: true,
      underscored: true,
      timestamps: true,
    },

  );

  return search;
};
