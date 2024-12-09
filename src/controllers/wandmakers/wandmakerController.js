import Wandmaker from "../../models/wandmakersModels/wandmakerModel.js";
import wandmakerTranslations from "../../models/wandmakersModels/wandmakerHasLanguage.js";
import Language from "../../models/languageModels/languageModel.js"
import translate from "../../config/translate.js"
import errors from "../../helpers/errors/wandmakerErrors.js"
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

async function deleteWandmaker(id) {
  const wandmaker = await wandmakerTranslations.findByPk(id);
  if (!wandmaker) throw new errors.WANDMAKER_NOT_FOUND;

  await wandmaker.destroy();

  await wandmakerTranslations.destroy({ where: { wandmaker_id: id } });
  return wandmaker;
}

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
