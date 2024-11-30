import { DataTypes } from "sequelize";
import sequelize from "../../config/sequelize.js";

const Transfer = sequelize.define("transfer", {
  transfer_id: {
    type: DataTypes.INTEGER.UNSIGNED,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  wandmaker_id: {
    type: DataTypes.INTEGER.UNSIGNED,
    allowNull: true,
  },
  user_id: {
    type: DataTypes.INTEGER.UNSIGNED,
    allowNull: false,
  },
  wand_id: {
    type: DataTypes.INTEGER.UNSIGNED,
    allowNull: false,
  },
  price: {
    type: DataTypes.INTEGER.UNSIGNED,
    allowNull: false,
  },
  date: {
    type: DataTypes.DATE,
    allowNull: false,
    defaultValue: DataTypes.NOW,
  },
});

export default Transfer;
