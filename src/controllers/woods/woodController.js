import WoodTranslations from "../../models/woodModels/woodHasLanguage.js";
import Wood from "../../models/woodModels/wandHasWoodModel.js";

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
  const wood = await Wood.findByPk(id);
  if (!wood) throw new Error("Wood not found");

  await wood.update(updatedData);

  const { language_id, name, description } = updatedData;
  const woodTranslation = await WoodTranslations.findOne({
    where: { wood_id: id, language_id },
  });

  if (woodTranslation) {
    await woodTranslation.update({ name, description });
  } else {
    await WoodTranslations.create({
      wood_id: id,
      language_id,
      name,
      description,
    });
  }

  const updatedWood = await WoodTranslations.findAll({
    where: { wood_id: id },
    include: [
      {
        model: Wood,
        attributes: ["discover_date"],
      },
    ],
    raw: true,
  });
  
  return updatedWood;
}


export const functions = {
  getAllWoods,
  getWoodById,
  deleteWood,
  updateWood,
};

export default functions;
