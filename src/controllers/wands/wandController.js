//import all the necesary models for the wand controller
import setupAssociations from "../../models/wandModels/wandAssociations.js";
import Wand from "../../models/wandModels/wandModel.js";
import WandHasLanguage from "../../models/wandModels/wandHasLanguage.js";
import Wandmaker from "../../models/wandmakersModels/wandmakerModel.js";
import Core from "../../models/coreModels/wandHasCoreModel.js";
import CoreTranslations from "../../models/coreModels/coreHasLanguage.js";
import Wood from "../../models/woodModels/wandHasWoodModel.js";
import WoodTranslations from "../../models/woodModels/woodHasLanguage.js";

setupAssociations();

async function getAllWands() {
  const wands = await Wand.findAll({
    include: [
      {
        model: WandHasLanguage,
        attributes: ["language_id", "flexibility", "name", "description"],
        order: [["language_id", 'ASC']],
      },
      {
        model: Wandmaker,
        attributes: ["name", "last_name"],
      },
      {
        model: Wood,
        include: [
          {
            model: WoodTranslations,
            attributes: ["name"],
          },
        ],
      },
      {
        model: Core,
        include: [
          {
            model: CoreTranslations,
            attributes: ["name"],
          },
        ],
      },
    ],
  })
  if (!wands) throw new Error("No wands found");
  return wands;
}

async function getWandById(id) {
  const wand = await Wand.findByPk(id, {
    include: [
      {
        model: WandHasLanguage,
        attributes: ["language_id", "flexibility", "name", "description"],
        order: [["language_id", 'ASC']],
      },
      {
        model: Wandmaker,
        attributes: ["name", "last_name"],
      },
      {
        model: Wood,
        include: [
          {
            model: WoodTranslations,
            attributes: ["name"],
          },
        ],
      },
      {
        model: Core,
        include: [
          {
            model: CoreTranslations,
            attributes: ["name"],
          },
        ],
      },
    ],
  });
  
  if (!wand) throw new Error("No wands found");
  return wand;
}

async function deleteWand(id) {
  const wand = await Wand.findByPk(id);
  if (!wand) throw new Error("Wand not found");

  await wand.destroy();
  return wand;
}

export const functions = {
  getAllWands,
  getWandById,
  deleteWand,
};
export default functions;
