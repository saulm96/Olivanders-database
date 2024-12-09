//import all the necesary models for the wand controller
import setupAssociations from "../../models/wandModels/wandAssociations.js";
import Wand from "../../models/wandModels/wandModel.js";
import WandHasLanguage from "../../models/wandModels/wandHasLanguage.js";
import Wandmaker from "../../models/wandmakersModels/wandmakerModel.js";
import Core from "../../models/coreModels/wandHasCoreModel.js";
import CoreTranslations from "../../models/coreModels/coreHasLanguage.js";
import Language from "../../models/languageModels/languageModel.js"
import Wood from "../../models/woodModels/wandHasWoodModel.js";
import WoodTranslations from "../../models/woodModels/woodHasLanguage.js";
import translate from "../../config/translate.js";
import errors from "../../helpers/errors/wandErrors.js";

setupAssociations();

async function getAllWands(language_id) {
  const wands = await Wand.findAll({
    include: [
      {
        model: WandHasLanguage,
        attributes: ["language_id", "flexibility", "name", "description"],
        where: {language_id},
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

async function getWandById(id, language_id) {
const wands = await Wand.findOne({
  where: { wand_id: id },
  include: [
    {
      model: WandHasLanguage,
      attributes: ["language_id", "flexibility", "name", "description"],
      where: { language_id },
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
})
return wands;
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

  //Fetch the supported languages from the database
  const supportedLanguages = await Language.findAll({
    attributes: ["language_id", "iso_code"],
  });
  //Translate the flexibility, name and description for each supported language
  const translations = await Promise.all(
    supportedLanguages.map(async (lang) => {
      return {
        flexibility: await translate(updatedData.flexibility, lang.iso_code),
        name: await translate(updatedData.name, lang.iso_code),
        description: await translate(updatedData.description, lang.iso_code),
      };
    })
  );
  //update the wand data in thr Wand model
  await wand.update(updatedData);

  //Update the wand translations in the WandHasLanguage model for the supported languages
  for (let i = 0; i < supportedLanguages.length; i++) {
    const { language_id } = supportedLanguages[i];
    const { flexibility, name, description } = translations[i];
    const wandTranslation = await WandHasLanguage.findOne({ where: { wand_id: id, language_id } });

    if(wandTranslation){
      await wandTranslation.update({ flexibility, name, description });
    }else{
      await WandHasLanguage.create({
        language_id,
        wand_id: wand.wand_id,
        flexibility,
        name,
        description,
      });
    }
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
  if (!wandmaker_id || !wood_id || !core_id || !length || !flexibility || !name || !description) {
    throw new errors.MISSING_DATA;
  }

  //Fetch the supported languages from the database
  const supportedLanguages = await Language.findAll({
    attributes: ["language_id", "iso_code"],
  });
  //Translate the flexibility, name and description for each supported language
  const translations = await Promise.all(
    supportedLanguages.map(async (lang) => {
      return {
        flexibility: await translate(flexibility, lang.iso_code),
        name: await translate(name, lang.iso_code),
        description: await translate(description, lang.iso_code),
      };
    })
  );

  //Create the wand in the Wand model
  const wand = await Wand.create({
    wandmaker_id,
    wood_id,
    core_id,
    length,
  });

  //Create the wand translations in the WandHasLanguage model for the supported languages
  for (let i = 0; i < supportedLanguages.length; i++) {
    const { language_id } = supportedLanguages[i];
    const { flexibility, name, description } = translations[i];

    await WandHasLanguage.create({
      wand_id: wand.wand_id,
      language_id,
      flexibility,
      name,
      description,
    });
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

