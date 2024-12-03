import Wand from './wandModel.js';
import WandHasLanguage from './wandHasLanguage.js';
import Wandmaker from '../wandmakersModels/wandmakerModel.js';
import Wood from '../woodModels/wandHasWoodModel.js';
import Core from '../coreModels/wandHasCoreModel.js';
import WoodTranslations from '../woodModels/woodHasLanguage.js';
import CoreTranslations from '../coreModels/coreHasLanguage.js';

function setupAssociations() {
  // Wand associations
  Wand.hasMany(WandHasLanguage, { foreignKey: 'wand_id' });
  Wand.belongsTo(Wandmaker, { foreignKey: 'wandmaker_id' });
  Wand.belongsTo(Wood, { foreignKey: 'wood_id' });
  Wand.belongsTo(Core, { foreignKey: 'core_id' });

  // WandHasLanguage associations
  WandHasLanguage.belongsTo(Wand, { foreignKey: 'wand_id' });

  // Wandmaker associations
  Wandmaker.hasMany(Wand, { foreignKey: 'wandmaker_id' });

  // Wood associations
  Wood.hasMany(Wand, { foreignKey: 'wood_id' });
  Wood.hasMany(WoodTranslations, { foreignKey: 'wood_id' });

  // Core associations
  Core.hasMany(Wand, { foreignKey: 'core_id' });
  Core.hasMany(CoreTranslations, { foreignKey: 'core_id' });

  // WoodTranslations associations
  WoodTranslations.belongsTo(Wood, { foreignKey: 'wood_id' });

  // CoreTranslations associations
  CoreTranslations.belongsTo(Core, { foreignKey: 'core_id' });
}

export default setupAssociations;