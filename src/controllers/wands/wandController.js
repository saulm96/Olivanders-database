//import all the necesary models for the wand controller
import setupAssociations from "../../models/wandModels/wandAssociations.js";
import Wand from "../../models/wandModels/wandModel.js";
import WandHasLanguage from "../../models/wandModels/wandHasLanguage.js";
import Wandmaker from "../../models/wandmakersModels/wandmakerModel.js";
import Core from "../../models/coreModels/wandHasCoreModel.js";
import CoreTranslations from "../../models/coreModels/coreHasLanguage.js";
import Wood from "../../models/woodModels/wandHasWoodModel.js";
import WoodTranslations from "../../models/woodModels/woodHasLanguage.js";
import translate from "../../config/translate.js";
import errors from "../../helpers/errors/wandErrors.js";

setupAssociations();

async function getAllWands() {
  const wands = await Wand.findAll({
    include: [
      {
        model: WandHasLanguage,
        attributes: ["language_id", "flexibility", "name", "description"],
        order: [["language_id", "ASC"]],
      },
      {
        model: Wandmaker,
        attributes: ["name", "last_name"],
      },
      {
        model: Wood,
        include: [
          {
            model: WoodTranslations,
            attributes: ["name"],
          },
        ],
      },
      {
        model: Core,
        include: [
          {
            model: CoreTranslations,
            attributes: ["name"],
          },
        ],
      },
    ],
  });
  if (!wands) throw new errors.WAND_LIST_NOT_AVAILABLE();
  return wands;
}

async function getWandById(id) {
  const wand = await Wand.findByPk(id, {
    include: [
      {
        model: WandHasLanguage,
        attributes: ["language_id", "flexibility", "name", "description"],
        order: [["language_id", "ASC"]],
      },
      {
        model: Wandmaker,
        attributes: ["name", "last_name"],
      },
      {
        model: Wood,
        include: [
          {
            model: WoodTranslations,
            attributes: ["name"],
          },
        ],
      },
      {
        model: Core,
        include: [
          {
            model: CoreTranslations,
            attributes: ["name"],
          },
        ],
      },
    ],
  });

  if (!wand) throw new errors.WAND_NOT_FOUND;
  return wand;
}

async function deleteWand(id) {
  const wand = await Wand.findByPk(id);
  if (!wand) throw new errors.WAND_NOT_FOUND;

  await wand.destroy();
  return wand;
}

async function updateWand(id, updatedData) {
  const wand = await Wand.findByPk(id);
  if (!wand) throw new errors.WAND_NOT_FOUND;

  // Translate the flexibility, name, and description from the wandHasLanguage model
  const { flexibility, name, description } = updatedData;
  const translations = await Promise.all([
    translate(flexibility, "es"), // Translate to Spanish
    translate(flexibility, "it"), // Translate to Italian
    translate(name, "es"), // Translate to Spanish
    translate(name, "it"), // Translate to Italian
    translate(description, "es"), // Translate to Spanish
    translate(description, "it"), // Translate to Italian
  ]);

  // Update the wand data in the Wand model
  await wand.update(updatedData);

  // Update the wand translations in the wandHasLanguage model for the supported languages
  const supportedLanguages = [
    { language_id: 1, flexibility, name, description }, // English
    {
      language_id: 2,
      flexibility: translations[0],
      name: translations[2],
      description: translations[4],
    }, // Spanish
    {
      language_id: 3,
      flexibility: translations[1],
      name: translations[3],
      description: translations[5],
    }, // Italian
  ];
  for (const language of supportedLanguages) {
    const wandTranslation = await WandHasLanguage.findOne({
      where: { wand_id: id, language_id: language.language_id },
    });
    await wandTranslation.update(language);
  }

  return wand;
}

async function createWand(newWandData) {
  const {
    wandmaker_id,
    wood_id,
    core_id,
    length,
    flexibility,
    name,
    description,
  } = newWandData;
  if(!wandmaker_id || !wood_id || !core_id || !length ||!flexibility || !name || !description){
    throw new errors.MISSING_DATA;
  }

  //translate the flexibility, name and description in the Wand
  const translations = await Promise.all([
    translate(flexibility, "es"), // Translate to Spanish
    translate(flexibility, "it"), // Translate to Italian
    translate(name, "es"), // Translate to Spanish
    translate(name, "it"), // Translate to Italian
    translate(description, "es"), // Translate to Spanish
    translate(description, "it"), // Translate to Italian
  ]);

  // Create the wand in the Wand model
  const wand = await Wand.create({
    wandmaker_id,
    wood_id,
    core_id,
    length,
  });

  // Create the wand translations in the wandHasLanguage model for the supported languages
  const supportedLanguages = [
    { language_id: 1, flexibility, name, description }, // English
    {language_id: 2,flexibility: translations[0],name: translations[2],description: translations[4]}, // Spanish
    {language_id: 3,flexibility: translations[1],name: translations[3],description: translations[5]}, // Italian
  ];
  for (const language of supportedLanguages) {
    await WandHasLanguage.create({...language, wand_id: wand.wand_id});
  }

  return wand;
}
export const functions = {
  getAllWands,
  getWandById,
  deleteWand,
  updateWand,
  createWand,
};
export default functions;

