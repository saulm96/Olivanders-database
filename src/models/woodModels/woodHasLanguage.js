import { DataTypes } from "sequelize";
import sequelize from "../../config/sequelize.js";

const WoodModel = sequelize.define("wood_has_language", {
  language_id: {
    type: DataTypes.INTEGER.UNSIGNED,
    primaryKey: true,
    references: {
      model: "Language",
      key: "language_id",
    },
  },
    wood_id: {
      type: DataTypes.INTEGER.UNSIGNED,
      primaryKey: true,
      references: {
        model: "Wood",
        key: "wood_id",
      },
    },
  name: {
    type: DataTypes.STRING(45),
    allowNull: false,
  },
  description: {
    type: DataTypes.STRING(220),
    allowNull: false,
  },
});

export default WoodModel;