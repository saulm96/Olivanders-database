import Wandmaker from "../../models/wandmakersModels/wandmakerModel.js";
import wandmakerTranslations from "../../models/wandmakersModels/wandmakerHasLanguage.js";
import translate from "../../config/translate.js"
async function getAllWandmakers() {
  const wandmakers = await wandmakerTranslations.findAll({
    include: [
      {
        model: Wandmaker,
        attributes: ["name", "last_name"],
      },
    ],
  });
  if (!wandmakers) throw new Error("No wandmaker list found");
  return wandmakers;
}

async function getWandmakerById(id) {
  const wandmaker = await wandmakerTranslations.findAll({
    where: { wandmaker_id: id },
    include: [
      {
        model: Wandmaker,
        attributes: ["name", "last_name"],
      },
    ],
  });

  if (!wandmaker) throw new Error("Wanmaker not found");

  return wandmaker;
}

async function deleteWandmaker(id) {
  const wandmaker = await wandmakerTranslations.findByPk(id);
  if (!wandmaker) throw new Error("Wandmaker not found");

  await wandmaker.destroy();

  await wandmakerTranslations.destroy({ where: { wandmaker_id: id } });
  return wandmaker;
}

async function updateWandmaker(id, updatedData) {
  const wandmaker = await Wandmaker.findByPk(id);
  if (!wandmaker) throw new Error("Wandmaker not found");

  //translate the specialty field from English to Spanish and Italian
  const { specialty } = updatedData;
  const translations = await Promise.all([
    translate(specialty, "es"), // Translate to Spanish
    translate(specialty, "it"), // Translate to Italian
  ]);

  // Update the wandmaker data in the Wandmaker model
  await wandmaker.update(updatedData);

  // Update the wandmaker translations in the WandmakerHasLanguage model for the supported languages
  const supportedLanguages = [
    { language_id: 1, specialty: specialty }, // English
    { language_id: 2, specialty: translations[0] }, // Spanish
    { language_id: 3, specialty: translations[1] }, // Italian
  ];

  for (const language of supportedLanguages) {
    const wandmakerTranslation = await wandmakerTranslations.findOne({
      where: { wandmaker_id: id, language_id: language.language_id },
    });

    await wandmakerTranslation.update(language);
  }
  return wandmaker;
}

async function createWandmaker(newWandmakerData) {
  const { name, last_name, specialty } = newWandmakerData;

  //translate the specialty field from English to Spanish and Italian
  const translations = await Promise.all([
    translate(specialty, "es"), // Translate to Spanish
    translate(specialty, "it"), // Translate to Italian
  ]);

  const wandmaker = await Wandmaker.create({ name, last_name });

  // Create the wandmaker translations in the WandmakerHasLanguage model for the supported languages
  const supportedLanguages = [
    {language_id: 1, specialty}, //english
    {language_id: 2, specialty: translations[0] }, //spanish
    {language_id: 3, specialty: translations[1]} //italian
  ];

  for(const language of supportedLanguages){
    await wandmakerTranslations.create({...language, wandmaker_id: wandmaker.wandmaker_id });
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
