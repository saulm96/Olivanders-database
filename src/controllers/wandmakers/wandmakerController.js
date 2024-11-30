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
    raw: true,
});
if(!wandmakers) throw new Error("No wandmaker list found");
return wandmakers;
}

async function getWandmakerById(id) {
  const wandmaker = await wandmakerTranslations.findOne({
    where: { wandmaker_id: id },
    include: [
      {
        model: Wandmaker,
        attributes: ["name", "last_name"],
      },
    ],
    raw: true,
  });

  if (!wandmaker) throw new Error("Wanmaker not found");

  return wandmaker;
}


export const functions = {
  getAllWandmakers,
  getWandmakerById,
};
export default functions;
