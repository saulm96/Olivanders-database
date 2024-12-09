import CoreTranslations from "../../models/coreModels/coreHasLanguage.js";
import Core from "../../models/coreModels/wandHasCoreModel.js";
import Language from "../../models/languageModels/languageModel.js"
import translate from "../../config/translate.js"
import errors from "../../helpers/errors/coreErrors.js"


/*
 * Retrieves all cores, translating them into the specified language if necessary.
 * 
 * This function first fetches all cores in English, then checks if translations 
 * exist for the specified language. If not, it creates new translations using 
 * the provided language ID and its ISO code. Finally, it returns all cores in 
 * the specified language.
 * 
 * @param {number} language_id - The ID of the language to translate the cores into.
 * @returns {Promise<Array<Object>>} A promise that resolves to an array of core objects, 
 *                                   each containing the translated name, description, 
 *                                   and discover date.
 */
async function getAllCores(language_id) {
  // Fetch all cores in English
  const coresInEnglish = await CoreTranslations.findAll({
    where: { language_id: 1 },
    include: [
      {
        model: Core,
        attributes: ["discover_date"],
      },
    ],
    raw: true,
  });

  // Fetch the ISO code of the specified language
  const usersIso = await Language.findOne({
    where: { language_id },
    attributes: ["iso_code"],
  });

  // Translate all cores in the specified language
  for (let i = 0; i < coresInEnglish.length; i++) {
    const { core_id, name, description } = coresInEnglish[i];

    // Check if the core is already translated in the specified language
    const coreTranslation = await CoreTranslations.findOne({
      where: { core_id, language_id },
    });

    if (!coreTranslation) {
      // If the core is not translated, create a new translation
      const newCore = await CoreTranslations.create({
        language_id: language_id,
        core_id: core_id,
        name: await translate(name, usersIso.iso_code),
        description: await translate(description, usersIso.iso_code),
      });
    }
  }

  // Fetch all cores in the specified language
  const finalCores = await CoreTranslations.findAll({
    where: { language_id },
    include: [
      {
        model: Core,
        attributes: ["discover_date"],
      },
    ],
    raw: true,
  });

  return finalCores;
}

  /**
   * Retrieves a core by ID, translating it into the specified language if 
   * necessary.
   * 
   * @param {number} id - The ID of the core to retrieve.
   * @param {number} language_id - The ID of the language to translate the core into.
   * @returns {Promise<Object>} A promise that resolves to an object containing the 
   *                            translated name, description, and discover date of 
   *                            the core.
   */
async function getCoreById(id, language_id) {
  const core = await CoreTranslations.findOne({
    where: {
      core_id: id,
      language_id,
    },
    include: [
      {
        model: Core,
        attributes: ["discover_date"],
      },
    ],
    raw: true,
  });

  if (!core) {
    const coreTranslation = await CoreTranslations.findOne({
      where: { core_id: id, language_id: 1 }
    });

    const usersIso = await Language.findOne({
      where: { language_id: language_id },
      attributes: ["iso_code"],
    });
    const newCore = await CoreTranslations.create({
      language_id: language_id,
      core_id: id,
      name: await translate(coreTranslation.name, usersIso.iso_code),
      description: await translate(coreTranslation.description, usersIso.iso_code),
    });
  }

  const finalCore = await CoreTranslations.findOne({
    where: {
      core_id: id,
      language_id,
    },
    include: [
      {
        model: Core,
        attributes: ["discover_date"],
      },
    ],
    raw: true,
  });


  return finalCore;
}
  /**
   * Deletes a core by ID.
   * 
   * @param {number} id - The ID of the core to delete.
   * @returns {Promise<Object>} A promise that resolves to the deleted core object.
   * @throws {errors.CORE_NOT_FOUND} If the core ID does not exist.
   */
async function deleteCore(id) {
  const core = await Core.findByPk(id);
  if (!core) throw new errors.CORE_NOT_FOUND;

  await core.destroy();
  return core;
}

  /**
   * Updates a core by ID.
   * 
   * @param {number} id - The ID of the core to update.
   * @param {Object} updatedData - The updated data for the core.
   * @returns {Promise<Object>} A promise that resolves to the updated core object.
   * @throws {errors.CORE_NOT_FOUND} If the core ID does not exist.
   */
async function updateCore(id, updatedData) {
  const core = await Core.findByPk(id);
  if (!core) throw new errors.CORE_NOT_FOUND;

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
  await core.update(updatedData);

  // Update the core translations in the CoreTranslations model for the supported languages
  for (let i = 0; i < supportedLanguages.length; i++) {
    const { language_id } = supportedLanguages[i];
    const { name, description } = translations[i];

    const coreTranslation = await CoreTranslations.findOne({
      where: { core_id: id, language_id },
    });

    if (coreTranslation) {
      // If the translation exists, update it
      await coreTranslation.update({ name, description });
    } else {
      // If the translation does not exist, create a new one
      await CoreTranslations.create({
        language_id,
        core_id: core.core_id,
        name,
        description,
      });
    }
  }

  return core;
}


/**
 * Creates a new core with the given data, and translates its name and description fields
 * into all supported languages.
 * 
 * @param {Object} newCoreData - The data of the new core to create, containing the name,
 *                               description, and discover date.
 * @returns {Promise<Object>} A promise that resolves to the created core object.
 * @throws {errors.MISSING_DATA} If the core data is missing.
 * @throws {errors.CORE_NOT_FOUND} If the core could not be created.
 */
async function createCore(newCoreData) {
  const { name, description, discover_date } = newCoreData;

  if (!name || !description || !discover_date) throw new errors.MISSING_DATA;

  // Create the core in the Core model
  const core = await Core.create({
    discover_date,
  });

  if (!core) throw new errors.CORE_NOT_FOUND;

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

    await CoreTranslations.create({
      language_id,
      core_id: core.core_id,
      name,
      description,
    });
  }

  return core;
}

export const functions = {
  getAllCores,
  getCoreById,
  deleteCore,
  updateCore,
  createCore,
};

export default functions;
