import { DataTypes } from "sequelize";
import sequelize from "../../config/sequelize.js";

const Wandmaker = sequelize.define("wandmakers", {
  wandmaker_id: {
    type: DataTypes.INTEGER.UNSIGNED,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  name: {
    type: DataTypes.STRING(60),
    allowNull: false,
  },
  last_name: {
    type: DataTypes.STRING(60),
    allowNull: false,
  }
});

export default Wandmaker;
