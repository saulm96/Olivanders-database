import Wandmaker from "../../models/wandmakersModels/wandmakerModel.js";
import wandmakerTranslations from "../../models/wandmakersModels/wandmakerHasLanguage.js";

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

  const { name, last_name } = updatedData;
  await wandmaker.update({ name, last_name });

  const wandmakerTranslation = await wandmakerTranslations.findOne({
    where: { wandmaker_id: id },
  });

  await wandmakerTranslation.update({ ...updatedData });

  const updatedWandmaker = await wandmakerTranslations.findAll({
    where: { wandmaker_id: id },
    include: [
      {
        model: Wandmaker,
        attributes: ["name", "last_name"],
      },
    ],
  });

  return updatedWandmaker;
}

export const functions = {
  getAllWandmakers,
  getWandmakerById,
  deleteWandmaker,
  updateWandmaker,
};
export default functions;
