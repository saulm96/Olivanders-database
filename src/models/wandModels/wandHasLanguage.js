import { DataTypes } from "sequelize";
import sequelize from "../../config/sequelize.js";

const WandHasLanguage = sequelize.define("wand_has_language", {
  language_id: {
    type: DataTypes.INTEGER.UNSIGNED,
    primaryKey: true,
    allowNull: false,
  },
  wand_id: {
    type: DataTypes.INTEGER.UNSIGNED,
    primaryKey: true,
    allowNull: false,
  },
  flexibility: {
    type: DataTypes.STRING(45),
    allowNull: false,
  },
  name: {
    type: DataTypes.STRING(45),
    allowNull: true,
  },
  description: {
    type: DataTypes.STRING(120),
    allowNull: false,
  },
});

export default WandHasLanguage;