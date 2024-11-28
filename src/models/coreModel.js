import { DataTypes } from "sequelize";
import sequelize from "../config/sequelize.js";

const Core = sequelize.define("cores", {
    core_id: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
    },
    name: {
        type: DataTypes.STRING(45),
        allowNull: false,
    }
});