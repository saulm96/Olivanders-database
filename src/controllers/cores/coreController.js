import CoreTranslations from "../../models/coreModels/coreHasLanguage.js";
import Core from "../../models/coreModels/wandHasCoreModel.js";

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

  // Update the core data in the Core model
  await core.update(updatedData);

  // Update the core translations in the CoreTranslations model
  const { language_id, name, description } = updatedData;
  const coreTranslation = await CoreTranslations.findOne({
    where: { core_id: id, language_id },
  });

  if (coreTranslation) {
    await coreTranslation.update({ name, description });
  } else {
    await CoreTranslations.create({
      core_id: id,
      language_id,
      name,
      description,
    });
  }

  // Fetch the updated core data with translations
  const updatedCore = await CoreTranslations.findAll({
    where: { core_id: id },
    include: [
      {
        model: Core,
        attributes: ["discover_date"],
      },
    ],
    raw: true,
  });
  
  return updatedCore;
}


export const functions = {
  getAllCores,
  getCoreById,
  deleteCore,
  updateCore,
};

export default functions;
