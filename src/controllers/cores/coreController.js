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
  const core = await CoreTranslations.findOne({
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


export const functions = {
  getAllCores,
  getCoreById,
};

export default functions;
