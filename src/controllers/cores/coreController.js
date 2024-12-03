import CoreTranslations from "../../models/coreModels/coreHasLanguage.js";
import Core from "../../models/coreModels/wandHasCoreModel.js";
import translate from "../../config/translate.js"

async function getAllCores() {
  const cores = await CoreTranslations.findAll({
    include: [
      {
        model: Core,
        attributes: ["discover_date"],
      },
    ],
    raw: true,
  });

  if (!cores) throw new Error("Cores not found");

  return cores;
}

async function getCoreById(id) {
  const core = await CoreTranslations.findAll({
    where: { core_id: id },
    include: [
      {
        model: Core,
        attributes: ["discover_date"],
      },
    ],
    raw: true,
  });
  if (!core) throw new Error("Core not found");

  return core;
}

async function deleteCore(id) {
  const core = await Core.findByPk(id);
  if (!core) throw new Error("Core not found");

  await core.destroy();
  return core;
}

async function updateCore(id, updatedData) {
  const core = await Core.findByPk(id);
  if (!core) throw new Error("Core not found");

  // Translate the name and description fields from English to Spanish and Italian
  const { name, description } = updatedData;
  const translations = await Promise.all([
    translate(name, "es"), // Translate to Spanish
    translate(name, "it"), // Translate to Italian
    translate(description, "es"), // Translate to Spanish
    translate(description, "it"), // Translate to Italian
  ]);

  // Update the core data in the Core model
  await core.update(updatedData);

  // Update the core translations in the CoreTranslations model for the supported languages
  const supportedLanguages = [
    { language_id: 1, name: name, description: description }, // English
    { language_id: 2, name: translations[0], description: translations[2] }, // Spanish
    { language_id: 3, name: translations[1], description: translations[3] }, // Italian
  ];

  for (const language of supportedLanguages) {
    const coreTranslation = await CoreTranslations.findOne({
      where: { core_id: id, language_id: language.language_id },
    });
      await coreTranslation.update(language);
  }

  return core;
}

async function createCore(newCoreData) {
  const { name, description, discover_date } = newCoreData;

  // Translate the name and description fields from English to Spanish and Italian
  const translations = await Promise.all([
    translate(name, "es"), // Translate to Spanish
    translate(name, "it"), // Translate to Italian
    translate(description, "es"), // Translate to Spanish
    translate(description, "it"), // Translate to Italian
  ]);

  // Create the core in the Core model
  const core = await Core.create({
    discover_date,
  });

  // Create the core translations in the CoreTranslations model for the supported languages
  const supportedLanguages = [
    { language_id: 1, name, description }, // English
    { language_id: 2, name: translations[0], description: translations[2] }, // Spanish
    { language_id: 3, name: translations[1], description: translations[3] }, // Italian
  ];

  for (const language of supportedLanguages) {
    await CoreTranslations.create({ ...language, core_id: core.core_id });
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
