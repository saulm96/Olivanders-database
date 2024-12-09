import WoodTranslations from "../../models/woodModels/woodHasLanguage.js";
import Wood from "../../models/woodModels/wandHasWoodModel.js";
import Language from "../../models/languageModels/languageModel.js"
import translate from "../../config/translate.js";
import errors from "../../helpers/errors/woodErrors.js"

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

async function deleteWood(id) {
  const wood = await Wood.findByPk(id);
  if (!wood) throw new errors.WOOD_NOT_FOUND;

  await wood.destroy();

  await WoodTranslations.destroy({ where: { wood_id: id } });
  return wood;
}

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
