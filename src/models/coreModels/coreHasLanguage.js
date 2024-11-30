import { DataTypes } from "sequelize";
import sequelize from "../../config/sequelize.js";
import Core from "./wandHasCoreModel.js"
import Language from "../languageModels/languageModel.js";



const CoreTranslations = sequelize.define("core_has_language", {
  language_id: {
    type: DataTypes.INTEGER.UNSIGNED,
    primaryKey: true,
  },
    core_id: {
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


CoreTranslations.belongsTo(Language, { foreignKey: "language_id", through: "core_has_language" }); 
CoreTranslations.belongsTo(Core, { foreignKey: "core_id" , through: "core_has_language"  });

export default CoreTranslations;
