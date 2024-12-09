import Wandmaker from "../../models/wandmakersModels/wandmakerModel.js";
import wandmakerTranslations from "../../models/wandmakersModels/wandmakerHasLanguage.js";
import Language from "../../models/languageModels/languageModel.js"
import translate from "../../config/translate.js"
import errors from "../../helpers/errors/wandmakerErrors.js"

/**
 * Retrieves all wandmakers in the specified language.
 * If a wandmaker is not yet translated to the specified language,
 * the specialty is translated and stored.
 *
 * @param {number} language_id - The ID of the language in which to retrieve wandmakers.
 * @returns {Promise<Array>} A promise that resolves to an array of wandmakers
 *                           with their names, last names, and specialties 
 *                           in the specified language.
 */
async function getAllWandmakers(language_id) {
 //Fetch all wandmakers in english
 const wandmakersInEnglish = await wandmakerTranslations.findAll({
  where: { language_id: 1},
  include: [
    {
      model: Wandmaker,
      attributes: ["name", "last_name"],
    }
  ],
  raw: true,
 })
 //Fetch the ISO code of the specified language
 const usersIso = await Language.findOne({
  where: { language_id },
  attributes: ["iso_code"],
 })
 //Translate all wandmakers in the specified language
 for(let i= 0; i < wandmakersInEnglish.length; i++){
  const{ wandmaker_id, specialty} = wandmakersInEnglish[i];
  
  //Check if the wandmaker is already translated in the specified language
  const wandmakerTranslation = await wandmakerTranslations.findOne({
    where: { wandmaker_id, language_id },
  });

  if(!wandmakerTranslation){
    // If the wandmaker is not translated, create a new translation
    const newWandmaker = await wandmakerTranslations.create({
      language_id: language_id,
      wandmaker_id: wandmaker_id,
      specialty: await translate(specialty, usersIso.iso_code),
    });
  }
 }
 //Fetch all wandmakers in the specified language
 const finalWandmakers = await wandmakerTranslations.findAll({
  where: { language_id },
  include: [
    {
      model: Wandmaker,
      attributes: ["name", "last_name"],
    },
  ],
 })
 return finalWandmakers;
}


/**
 * Retrieves a wandmaker by their ID in the specified language.
 * If the wandmaker is not yet translated to the specified language,
 * the specialty is translated and stored.
 *
 * @param {number} id - The ID of the wandmaker to retrieve.
 * @param {number} language_id - The ID of the language in which to retrieve the wandmaker.
 * @returns {Promise<Object>} A promise that resolves to an object containing the wandmaker's name, last name, and specialty
 *                           in the specified language.
 */
async function getWandmakerById(id, language_id) {
  const wandmaker = await wandmakerTranslations.findOne({
    where: {
      wandmaker_id: id,
      language_id
    },
    include: [
      {
        model: Wandmaker,
        attributes: ["name", "last_name"],
      },
    ],
    raw: true,
  })
  if (!wandmaker) {
    const wandmakerTranslation = await wandmakerTranslations.findOne({
      where: { wandmaker_id: id, language_id: 1 }
    });
    const usersIso = await Language.findOne({
      where: { language_id: language_id },
      attributes: ["iso_code"],
    });
    const newWandmaker = await wandmakerTranslations.create({
      language_id: language_id,
      wandmaker_id: id,
      specialty: await translate(wandmakerTranslation.specialty, usersIso.iso_code),
    });
  }
  const finalWandmaker = await wandmakerTranslations.findOne({
    where: {
      wandmaker_id: id,
      language_id,
    },
    include: [
      {
        model: Wandmaker,
        attributes: ["name", "last_name"],
      },
    ],
    
  })
  return finalWandmaker;
}

/**
 * Deletes a wandmaker by their ID and removes all of their translations.
 * Throws WANDMAKER_NOT_FOUND if the wandmaker is not found.
 *
 * @param {number} id - The ID of the wandmaker to delete.
 * @returns {Promise<Object>} A promise that resolves to the deleted wandmaker.
 */
async function deleteWandmaker(id) {
  const wandmaker = await wandmakerTranslations.findByPk(id);
  if (!wandmaker) throw new errors.WANDMAKER_NOT_FOUND;

  await wandmaker.destroy();

  await wandmakerTranslations.destroy({ where: { wandmaker_id: id } });
  return wandmaker;
}

/**
 * Updates a wandmaker by their ID and updates their translations.
 * Throws CORE_NOT_FOUND if the wandmaker is not found.
 *
 * @param {number} id - The ID of the wandmaker to update.
 * @param {Object} updatedData - The updated data for the wandmaker.
 * @returns {Promise<Object>} A promise that resolves to the updated wandmaker.
 */
async function updateWandmaker(id, updatedData) {
  const wandmaker = await Wandmaker.findByPk(id);
  if (!wandmaker) throw new errors.CORE_NOT_FOUND;

  // Fetch the supported languages from the database
  const supportedLanguages = await Language.findAll({
    attributes: ["language_id", "iso_code"],
  });

  // Translate the name and description fields for each supported language
  const translations = await Promise.all(
    supportedLanguages.map(async (lang) => {
      return {
        specialty: await translate(updatedData.specialty, lang.iso_code),
      };
    })
  );

  // Update the wandmaker data in the Core model
  await wandmaker.update(updatedData);

  // Update the wandmaker translations in the CoreTranslations model for the supported languages
  for (let i = 0; i < supportedLanguages.length; i++) {
    const { language_id } = supportedLanguages[i];
    const { specialty } = translations[i];

    const wandmakerTranslation = await wandmakerTranslations.findOne({
      where: { wandmaker_id: id, language_id },
    });

    if (wandmakerTranslation) {
      await wandmakerTranslation.update({ specialty });
    } else {
      await wandmakerTranslations.create({
        language_id,
        wandmaker_id: wandmaker.wandmaker_id,
        specialty,
      });
    }

  }
  return wandmaker;
}

  /**
   * Creates a new wandmaker.
   * @param {Object} newWandmakerData The data for the new wandmaker.
   * @param {string} newWandmakerData.name The name of the wandmaker.
   * @param {string} newWandmakerData.last_name The last name of the wandmaker.
   * @param {string} newWandmakerData.specialty The specialty of the wandmaker.
   * @returns {Promise<Object>} A promise that resolves to the newly created wandmaker.
   * @throws {Error} If the wandmaker could not be created.
   */
async function createWandmaker(newWandmakerData) {
  const { name, last_name, specialty } = newWandmakerData;

  if (!name || !last_name || !specialty) throw new errors.MISSING_DATA;

  // Create the core in the Core model
  const wandmaker = await Wandmaker.create({
    name,
    last_name,
  });

  if (!wandmaker) throw new errors.WANDMAKER_NOT_FOUND;

  // Fetch the supported languages from the database
  const supportedLanguages = await Language.findAll({
    attributes: ["language_id", "iso_code"],
  });

  // Translate the name and description fields for each supported language
  const translations = await Promise.all(
    supportedLanguages.map(async (lang) => {
      return {
        specialty: await translate(specialty, lang.iso_code),
      };
    })
  );

  // Create the core translations in the CoreTranslations model for each supported language
  for (let i = 0; i < supportedLanguages.length; i++) {
    const { language_id } = supportedLanguages[i];
    const { specialty } = translations[i];

    await wandmakerTranslations.create({
      language_id,
      wandmaker_id: wandmaker.wandmaker_id,
      name,
      last_name,
      specialty,
    });
  }

  return wandmaker;
}
export const functions = {
  getAllWandmakers,
  getWandmakerById,
  deleteWandmaker,
  updateWandmaker,
  createWandmaker,
};
export default functions;
