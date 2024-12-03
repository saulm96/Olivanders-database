import WoodTranslations from "../../models/woodModels/woodHasLanguage.js";
import Wood from "../../models/woodModels/wandHasWoodModel.js";
import translate from "../../config/translate.js";

async function getAllWoods() {
  const woods = await WoodTranslations.findAll({
    include: [
      {
        model: Wood,
        attributes: ["discover_date"],
      },
    ],
    raw: true,
  });

  if (!woods) throw new Error("Woods not found");

  return woods;
}

async function getWoodById(id) {
  const wood = await WoodTranslations.findAll({
    where: { wood_id: id },
    include: [
      {
        model: Wood,
        attributes: ["discover_date"],
      },
    ],
    raw: true,
  });
  if (!wood) throw new Error("Wood not found");

  return wood;
}
async function deleteWood(id) {
  const wood = await Wood.findByPk(id);
  if (!wood) throw new Error("Wood not found");

  await wood.destroy();

  await WoodTranslations.destroy({ where: { wood_id: id } });
  return wood;
}

async function updateWood(id, updatedData) {
  const core = await Wood.findByPk(id);
  if (!core) throw new Error("Wood not found");

  //translate the name and description fields from English to Spanish and Italian
  const { name, description } = updatedData;
  const translations = await Promise.all([
    translate(name, "es"), // Translate to Spanish
    translate(name, "it"), // Translate to Italian
    translate(description, "es"), // Translate to Spanish
    translate(description, "it"), // Translate to Italian
  ]);

  //Update the wood data in the Wood model
  await core.update(updatedData);

  //Update the wood translations in the WoodTranslations model for the supported languages
  const supportedLanguages = [
    { language_id: 1, name: name, description: description }, // English
    { language_id: 2, name: translations[0], description: translations[2] }, // Spanish
    { language_id: 3, name: translations[1], description: translations[3] }, // Italian
  ];

  for (const language of supportedLanguages) {
    const woodTranslation = await WoodTranslations.findOne({
      where: { wood_id: id, language_id: language.language_id },
    });
    await woodTranslation.update(language);
  }
  return core;
}

async function createWood(newWoodData) {
  const { name, description, discover_date } = newWoodData;

  const translations = await Promise.all([
    translate(name, "es"), // Translate to Spanish
    translate(name, "it"), // Translate to Italian
    translate(description, "es"), // Translate to Spanish
    translate(description, "it"), // Translate to Italian
  ]);

  // Create the wood in the Wood model
  const wood = await Wood.create({
    discover_date,
  });

  // Create the wood translations in the WoodTranslations model for the supported languages
  const supportedLanguages = [
    { language_id: 1, name, description }, // English
    { language_id: 2, name: translations[0], description: translations[2] }, // Spanish
    { language_id: 3, name: translations[1], description: translations[3] }, // Italian
  ];

  for (const language of supportedLanguages) {
    await WoodTranslations.create({ ...language, wood_id: wood.wood_id });
  }
}

export const functions = {
  getAllWoods,
  getWoodById,
  deleteWood,
  updateWood,
  createWood,
};

export default functions;
