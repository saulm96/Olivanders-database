import wandmakerController from "./wandmakerController.js";
import cleanWandmakerData from "../../helpers/JSONcleaner/wandmakerCleaner.js";

async function getAllWandmakers(req, res) {
  try {
    const wandmakers = await wandmakerController.getAllWandmakers();
    const cleanWandmakers = cleanWandmakerData(wandmakers);
    res.json(cleanWandmakers);
  } catch (error) {
    error.status ? res.status(error.status) : res.status(500);
    res.json({ error: error.message });
  }
}

async function getWandmakerById(req, res) {
  try {
    const wandmaker = await wandmakerController.getWandmakerById(req.params.id);
    const cleanWandmaker = cleanWandmakerData(wandmaker);

    res.json(cleanWandmaker);
  } catch (error) {
    error.status ? res.status(error.status) : res.status(500);
    res.json({ error: error.message });
  }
}
async function deleteWandmaker(req, res) {
  try {
    const deletedWandmaker = await wandmakerController.deleteWandmaker(req.params.id);
    res.json(deletedWandmaker);
  } catch (error) {
    error.status? res.status(error.status) : res.status(500);
    res.json({ error: error.message });
  }
}

async function updateWandmaker(req, res) {
  try {
    const id = parseInt(req.params.id);
    const updatedWandmaker = await wandmakerController.updateWandmaker(
      id,
      req.body
    );
    const cleanWandmaker = cleanWandmakerData(updatedWandmaker);

    res.json(cleanWandmaker);
  } catch (error) {
    error.status? res.status(error.status) : res.status(500);
    res.json({ error: error.message });
  }
}

export const functions = {
  getAllWandmakers,
  getWandmakerById,
  deleteWandmaker,
  updateWandmaker,
};

export default functions;
