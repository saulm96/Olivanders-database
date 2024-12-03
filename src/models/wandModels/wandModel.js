import { DataTypes } from "sequelize";
import sequelize from "../../config/sequelize.js";

const Wand = sequelize.define("wands", {
  wand_id: {
    type: DataTypes.INTEGER.UNSIGNED,
    primaryKey: true,
    autoIncrement: true,
  },
  wandmaker_id: {
    type: DataTypes.INTEGER.UNSIGNED,
    allowNull: false,
  },
  wood_id: {
    type: DataTypes.INTEGER.UNSIGNED,
    allowNull: false,
  },
  core_id: {
    type: DataTypes.INTEGER.UNSIGNED,
    allowNull: false,
  },
  length: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
});

export default Wand;

