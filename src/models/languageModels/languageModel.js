import { DataTypes } from "sequelize";
import sequelize from "../../config/sequelize.js";

const Language = sequelize.define("languages", {
    language_id: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
    },
    name: {
        type: DataTypes.STRING(45),
        allowNull: false,
        unique: true,
    },
    iso_code:{
        type: DataTypes.STRING(45),
        allowNull: false,
        unique: true,
    }
});


export default Language;