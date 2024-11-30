import { DataTypes } from "sequelize";
import sequelize from "../../config/sequelize.js";

const Wood = sequelize.define("wand_has_wood", {
    wood_id:{
        type: DataTypes.INTEGER.UNSIGNED,
        primaryKey: true,
        allosNull: false,
        autoIncremenet: true,
    },
    discover_date:{
        type: DataTypes.STRING(20),
        allowNull:true,
    },
});

export default Wood;