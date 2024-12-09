import WoodTranslations from "../../models/woodModels/woodHasLanguage.js";
import Wood from "../../models/woodModels/wandHasWoodModel.js";
import Language from "../../models/languageModels/languageModel.js"
import translate from "../../config/translate.js";
import errors from "../../helpers/errors/woodErrors.js"

/**
 * Retrieves all woods in the specified language.
 * If a wood is not yet translated to the specified language,
 * the name and description are translated and stored.
 *
 * @param {number} language_id - The ID of the language in which to retrieve woods.
 * @returns {Promise<Array>} A promise that resolves to an array of woods
 *                           with their names, descriptions, and discover dates
 *                           in the specified language.
 */
async function getAllWoods(language_id){
  const woodInEnglish = await WoodTranslations.findAll({
    where: { language_id: 1 },
    include: [
      {
        model: Wood,
        attributes: ["discover_date"],
      },
    ],
    raw: true,
  })

  //Fetch the iso code of the specified language
  const usersIso = await Language.findOne({
    where: { language_id },
    attributes: ["iso_code"],
  })

  //Translate all woods in the specified language
  for(let i = 0; i < woodInEnglish.length; i++){
    const {wood_id, name, description} = woodInEnglish[i];

    //Check if the wood is already translated in the specified language
    const woodTranslation = await WoodTranslations.findOne({
      where: { wood_id, language_id },
    });

    if(!woodTranslation){
      // If the wood is not translated, create a new translation
      const newWood = await WoodTranslations.create({
        language_id: language_id,
        wood_id: wood_id,
        name: await translate(name, usersIso.iso_code),
        description: await translate(description, usersIso.iso_code),
      });
    }
  }
  // Fetch all woods in the specified language
  const finalWoods = await WoodTranslations.findAll({
    where: { language_id },
    include: [
      {
        model: Wood,
        attributes: ["discover_date"],
      },
    ],
    raw: true,
  })

  return finalWoods;
}

/**
 * Retrieves a wood by its ID in the specified language.
 * If the wood is not yet translated to the specified language,
 * the name and description are translated and stored.
 *
 * @param {number} id - The ID of the wood to retrieve.
 * @param {number} language_id - The ID of the language in which to retrieve the wood.
 * @returns {Promise<Object>} A promise that resolves to an object containing the wood's name, 
 *                            description, and discover date in the specified language.
 */
async function getWoodById(id, language_id) {
  const wood = await WoodTranslations.findOne({
    where: {
      wood_id: id,
      language_id,
    },
    include: [
      {
        model: Wood,
        attributes: ["discover_date"],
      },
    ],
    raw: true,
  });

  if (!wood) {
    const woodTranslation = await WoodTranslations.findOne({
      where: { wood_id: id, language_id: 1 }});

    const usersIso = await Language.findOne({
      where: { language_id: language_id },
      attributes: ["iso_code"],
    });
    const newWood = await WoodTranslations.create({
      language_id: language_id,
      wood_id: id,
      name: await translate(woodTranslation.name, usersIso.iso_code),
      description: await translate(woodTranslation.description, usersIso.iso_code),
    });
  }

  const finalWood = await WoodTranslations.findOne({
    where: {
      wood_id: id,
      language_id,
    },
    include: [
      {
        model: Wood,
        attributes: ["discover_date"],
      },
    ],
    raw: true,
  });


  return finalWood;

}

/**
 * Deletes a wood by its ID.
 * @param {number} id - The ID of the wood to delete.
 * @returns {Promise<Object>} A promise that resolves to the deleted wood.
 * @throws {errors.WOOD_NOT_FOUND} If the wood is not found.
 */
async function deleteWood(id) {
  const wood = await Wood.findByPk(id);
  if (!wood) throw new errors.WOOD_NOT_FOUND;

  await wood.destroy();

  await WoodTranslations.destroy({ where: { wood_id: id } });
  return wood;
}

/**
 * Updates a wood by its ID and updates its translations.
 * Throws WOOD_NOT_FOUND if the wood is not found.
 *
 * @param {number} id - The ID of the wood to update.
 * @param {Object} updatedData - The updated data for the wood.
 * @returns {Promise<Object>} A promise that resolves to the updated wood.
 */
async function updateWood(id, updatedData) {
  const wood = await Wood.findByPk(id);
  if (!wood) throw new errors.WOOD_NOT_FOUND;

  // Fetch the supported languages from the database
  const supportedLanguages = await Language.findAll({
    attributes: ["language_id", "iso_code"],
  });

  // Translate the name and description fields for each supported language
  const translations = await Promise.all(
    supportedLanguages.map(async (lang) => {
      return {
        name: await translate(updatedData.name, lang.iso_code),
        description: await translate(updatedData.description, lang.iso_code),
      };
    })
  );

  // Update the core data in the Core model
  await wood.update(updatedData);

  // Update the core translations in the CoreTranslations model for the supported languages
  for (let i = 0; i < supportedLanguages.length; i++) {
    const { language_id } = supportedLanguages[i];
    const { name, description } = translations[i];

    const woodTranslation = await WoodTranslations.findOne({
      where: { wood_id: id, language_id },
    });

    if (woodTranslation) {
      await woodTranslation.update({ name, description });
    } else {
      await WoodTranslations.create({
        language_id,
        wood_id: wood.wood_id,
        name,
        description,
      });
    }

  }
  return wood;
}


/**
 * Creates a new wood entry in the database with translations for each supported language.
 *
 * @param {Object} newWoodData - The data for the new wood.
 * @param {string} newWoodData.name - The name of the wood.
 * @param {string} newWoodData.description - The description of the wood.
 * @param {string} newWoodData.discover_date - The discover date of the wood.
 * @returns {Promise<Object>} A promise that resolves to the newly created wood.
 * @throws {Error} If any of the required data is missing or if the wood could not be created.
 */
async function createWood(newWoodData) {
  const { name, description, discover_date } = newWoodData;

  if (!name || !description || !discover_date) throw new errors.MISSING_DATA;

  // Create the core in the Core model
  const wood = await Wood.create({
    discover_date,
  });

  if (!wood) throw new errors.WOOD_NOT_FOUND;

  // Fetch the supported languages from the database
  const supportedLanguages = await Language.findAll({
    attributes: ["language_id", "iso_code"],
  });

  // Translate the name and description fields for each supported language
  const translations = await Promise.all(
    supportedLanguages.map(async (lang) => {
      return {
        name: await translate(name, lang.iso_code),
        description: await translate(description, lang.iso_code),
      };
    })
  );

  // Create the core translations in the CoreTranslations model for each supported language
  for (let i = 0; i < supportedLanguages.length; i++) {
    const { language_id } = supportedLanguages[i];
    const { name, description } = translations[i];

    await WoodTranslations.create({
      language_id,
      wood_id: wood.wood_id,
      name,
      description,
    });
  }

  return wood;
}

export const functions = {
  getAllWoods,
  getWoodById,
  deleteWood,
  updateWood,
  createWood,
};

export default functions;
