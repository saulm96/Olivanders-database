import { DataTypes } from "sequelize";
import sequelize from "../../config/sequelize.js";

const TransferHasLanguage = sequelize.define("transfer_has_language", {
  language_id: {
    type: DataTypes.INTEGER.UNSIGNED,
    primaryKey: true,
  },
  transfer_id: {
    type: DataTypes.INTEGER.UNSIGNED,
    primaryKey: true,
  },
  transfer_type: {
    type: DataTypes.STRING(45),
    allowNull: false,
  },
});

export default TransferHasLanguage;
