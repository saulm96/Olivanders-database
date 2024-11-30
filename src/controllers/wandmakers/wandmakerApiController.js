import wandmakerController from "./wandmakerController.js";
import cleanWandmakerData from "../../helpers/JSONcleaner/wandmakerCleaner.js";

async function getAllWandmakers(req, res) {
  try {
    const wandmakers = await wandmakerController.getAllWandmakers();
    const cleanedWandmakers = cleanWandmakerData(wandmakers);
    res.json(cleanedWandmakers);
  } catch (error) {
    error.status ? res.status(error.status) : res.status(500);
    res.json({ error: error.message });
  }
}

async function getWandmakerById(req, res) {
  try {
    const wandmaker = await wandmakerController.getWandmakerById(req.params.id);
    res.json(wandmaker);
  } catch (error) {
    error.status ? res.status(error.status) : res.status(500);
    res.json({ error: error.message });
  }
}

export const functions = {
  getAllWandmakers,
  getWandmakerById,
};

export default functions;
