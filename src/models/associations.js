import Wood from "./woodModels/wandHasWoodModel.js"; 
function setupAssociations(models) {
    const { 
      Wood, 
      Core, 
      Wandmaker, 
      Wand, 
      Language
    } = models;
  
    // Relaciones One-to-Many
    Wandmaker.hasMany(Wand, { foreignKey: 'wandmaker_id' });
    Wand.belongsTo(Wandmaker, { foreignKey: 'wandmaker_id' });
  
    Wood.hasMany(Wand, { foreignKey: 'wood_id'});
    Wand.belongsTo(Wood, { foreignKey: 'wood_id'});
  
    Core.hasMany(Wand, { foreignKey: 'core_id',});
    Wand.belongsTo(Core, { foreignKey: 'core_id',});
  
    // Relaciones Many-to-Many con Lenguajes
    Language.belongsToMany(Wand, { 
      through: 'wand_has_language', 
      foreignKey: 'language_id', 
      otherKey: 'wand_id',
    });
    Wand.belongsToMany(Language, { 
      through: 'wand_has_language', 
      foreignKey: 'wand_id', 
      otherKey: 'language_id',
    });
  
    Language.belongsToMany(Wood, { 
      through: 'wood_has_language', 
      foreignKey: 'language_id', 
      otherKey: 'wood_id',
    });
    WandWood.belongsToMany(Language, { 
      through: 'wood_has_language', 
      foreignKey: 'wood_id', 
      otherKey: 'language_id',

    });
  
    Language.belongsToMany(Core, { 
      through: 'core_has_language', 
      foreignKey: 'language_id', 
      otherKey: 'core_id',
    });
    WandCore.belongsToMany(Language, { 
      through: 'core_has_language', 
      foreignKey: 'core_id', 
      otherKey: 'language_id',
    });
  
    Language.belongsToMany(Wandmaker, { 
      through: 'wandmaker_has_language', 
      foreignKey: 'language_id', 
      otherKey: 'wandmaker_id',
    });
    Wandmaker.belongsToMany(Language, { 
      through: 'wandmaker_has_language', 
      foreignKey: 'wandmaker_id', 
      otherKey: 'language_id',
    });
  }

  export default setupAssociations;