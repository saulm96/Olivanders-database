import { DataTypes } from "sequelize";
import sequelize from "../../config/sequelize.js";
import Wood from "./wandHasWoodModel.js"
import Language from "../languageModels/languageModel.js";

const WoodTranslations = sequelize.define("wood_has_language", {
  language_id: {
    type: DataTypes.INTEGER.UNSIGNED,
    primaryKey: true,
  },
    wood_id: {
      type: DataTypes.INTEGER.UNSIGNED,
      primaryKey: true,
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


WoodTranslations.belongsTo(Language, { foreignKey: "language_id", through: "wood_has_language" }); 
WoodTranslations.belongsTo(Wood, { foreignKey: "wood_id" , through: "wood_has_language"  });

export default WoodTranslations;
