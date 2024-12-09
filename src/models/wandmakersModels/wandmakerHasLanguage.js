import {DataTypes} from 'sequelize';
import sequelize from "../../config/sequelize.js";
import Wandmaker from "../wandmakersModels/wandmakerModel.js"
import Language from "../languageModels/languageModel.js"


const wandmakerTranslations = sequelize.define('wandmaker_has_language', {
    wandmaker_id: {
        type: DataTypes.INTEGER.UNSIGNED,
        primaryKey: true,
        },
    language_id: {
        type: DataTypes.INTEGER.UNSIGNED,
        primaryKey: true,
    },
    specialty: {
        type: DataTypes.STRING(400),
        allowNull: false,
    }
});


wandmakerTranslations.belongsTo(Wandmaker, {foreignKey: 'wandmaker_id' , through: 'wandmaker_has_language'});
wandmakerTranslations.belongsTo(Language, {foreignKey: 'language_id', through: 'wandmaker_has_language'  });
export default wandmakerTranslations;
