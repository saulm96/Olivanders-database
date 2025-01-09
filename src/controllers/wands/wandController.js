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

/**
 * @description Retrieves a list of all wands in the database.
 * @param {Integer} language_id - The id of the language in which the wands are to be retrieved.
 * @returns {Array<Object>} An array of objects, each representing a wand, with its flexibility, name, description, wandmaker's name and last name, wood's name, and core's name.
 * @throws {errors.WAND_LIST_NOT_AVAILABLE} If the wands list is not available.
 */
async function getAllWands(language_id) {
  // Fetch all wands in English
  console.log('Starting translation process for all wands');

  // Fetch the ISO code of the specified language
  const usersIso = await Language.findOne({
    where: { language_id },
    attributes: ["iso_code"],
  });
  
  console.log('ISO code for the specified language:', usersIso.iso_code);
  
  // Fetch all wands in English
  const wandsInEnglish = await Wand.findAll({
    include: [
      {
        model: WandHasLanguage,
        attributes: ["language_id", "flexibility", "name", "description"],
        where: { language_id: 1 },
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
            where: { language_id: 1 },
          },
        ],
      },
      {
        model: Core,
        include: [
          {
            model: CoreTranslations,
            attributes: ["name"],
            where: { language_id: 1 },
          },
        ],
      },
    ],
    raw: true,
  });
  
  console.log('Fetched wands in English:', wandsInEnglish);
  
  // Translate all wands in the specified language
  for (let i = 0; i < wandsInEnglish.length; i++) {
    const wand = wandsInEnglish[i];
    const wand_id = wand['wand_id'];
    const flexibility = wand['wand_has_languages.flexibility'];
    const name = wand['wand_has_languages.name'];
    const description = wand['wand_has_languages.description'];
    const Wood = wand['wand_has_wood'];
    const Core = wand['wand_has_core'];
  
    console.log(`Processing wand with ID: ${wand_id}`);
    console.log(`Wand details - Name: ${name}, Flexibility: ${flexibility}, Description: ${description}`);
  
    // Check if the wand is already translated in the specified language
    const wandTranslation = await WandHasLanguage.findOne({
      where: { wand_id, language_id },
    });
  
    if (!wandTranslation) {
      // If the wand is not translated, create a new translation
      console.log(`Translating wand: ${name}`);
      await WandHasLanguage.create({
        language_id: language_id,
        wand_id: wand_id,
        flexibility: flexibility ? await translate(flexibility, usersIso.iso_code) : null,
        name: name ? await translate(name, usersIso.iso_code) : null,
        description: description ? await translate(description, usersIso.iso_code) : null,
      });
    }
  
    // Check if the wood is already translated in the specified language
    if (Wood) {
      console.log(`Processing wood with ID: ${Wood.wood_id}`);
      const woodTranslation = await WoodTranslations.findOne({
        where: { wood_id: Wood.wood_id, language_id },
      });
  
      if (!woodTranslation) {
        // If the wood is not translated, create a new translation
        const translatedWoodName = Wood.name ? await translate(Wood.name, usersIso.iso_code) : null;
        console.log(`Translating wood name: ${Wood.name} to ${translatedWoodName}`);
        await WoodTranslations.create({
          wood_id: Wood.wood_id,
          language_id: language_id,
          name: translatedWoodName,
        });
      }
    }
  
    // Check if the core is already translated in the specified language
    if (Core) {
      console.log(`Processing core with ID: ${Core.core_id}`);
      const coreTranslation = await CoreTranslations.findOne({
        where: { core_id: Core.core_id, language_id },
      });
  
      if (!coreTranslation) {
        // If the core is not translated, create a new translation
        const translatedCoreName = Core.name ? await translate(Core.name, usersIso.iso_code) : null;
        console.log(`Translating core name: ${Core.name} to ${translatedCoreName}`);
        await CoreTranslations.create({
          core_id: Core.core_id,
          language_id: language_id,
          name: translatedCoreName,
        });
      }
    }
  }
  
  console.log('Translation process completed');
  // Fetch all wands in the specified language
  const finalWands = await Wand.findAll({
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
            where: { language_id },
          },
        ],
      },
      {
        model: Core,
        include: [
          {
            model: CoreTranslations,
            attributes: ["name"],
            where: { language_id },
          },
        ],
      },
    ],
  });
  
  return finalWands;
}
/**
 * @description Retrieves a wand by its ID in the specified language.
 * @param {Integer} id - The ID of the wand to retrieve.
 * @param {Integer} language_id - The ID of the language in which to retrieve the wand.
 * @returns {Object} An object containing the wand's flexibility, name, description, wandmaker's name and last name, wood's name, and core's name.
 * @throws {errors.WAND_NOT_FOUND} If the wand is not found.
 */
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

/**
 * Deletes a wand by its ID.
 * @param {number} id - The ID of the wand to delete.
 * @returns {Promise<Object>} A promise that resolves to the deleted wand.
 * @throws {errors.WAND_NOT_FOUND} If the wand is not found.
 */
async function deleteWand(id) {
  const wand = await Wand.findByPk(id);
  if (!wand) throw new errors.WAND_NOT_FOUND;

  await wand.destroy();
  return wand;
}

/**
 * Updates a wand by its ID and updates its translations.
 * Throws WAND_NOT_FOUND if the wand is not found.
 *
 * @param {number} id - The ID of the wand to update.
 * @param {Object} updatedData - The updated data for the wand.
 * @returns {Promise<Object>} A promise that resolves to the updated wand.
 */
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

    if (wandTranslation) {
      await wandTranslation.update({ flexibility, name, description });
    } else {
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

/**
 * Creates a new wand with translations for each supported language.
 * 
 * @param {Object} newWandData - The data for the new wand.
 * @param {number} newWandData.wandmaker_id - The ID of the wandmaker.
 * @param {number} newWandData.wood_id - The ID of the wood used.
 * @param {number} newWandData.core_id - The ID of the core used.
 * @param {number} newWandData.length - The length of the wand.
 * @param {string} newWandData.flexibility - The flexibility of the wand.
 * @param {string} newWandData.name - The name of the wand.
 * @param {string} newWandData.description - The description of the wand.
 * @returns {Promise<Object>} A promise that resolves to the newly created wand.
 * @throws {Error} If any of the required data is missing.
 */
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

