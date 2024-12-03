import wandController from "./wandController.js";
import cleanWandData from "../../helpers/JSONcleaner/wandCleaner.js";

async function getAllWands(req, res) {
  try {
    const wands = await wandController.getAllWands();
    const formatedWands = cleanWandData(wands);

    res.json(formatedWands);
  } catch (error) {
    error.status ? res.status(error.status) : res.status(500);
    res.json({ error: error.message });
  }
}

async function getWandById(req, res) {
  try {
    const wand = await wandController.getWandById(req.params.id);
    const cleanedWand = cleanWandData(wand);

    res.json(cleanedWand); //
  } catch (error) {
    error.status ? res.status(error.status) : res.status(500);
    res.json({ error: error.message });
  }
}

async function deleteWand(req, res) {
  try {
    const deletedWand = await wandController.deleteWand(req.params.id);
    res.json(deletedWand);
  } catch (error) {
    error.status ? res.status(error.status) : res.status(500);
    res.json({ error: error.message });
  }
}

async function updateWand(req, res) {
  try {
    const id = parseInt(req.params.id);
    const updatedWood = req.body;

    const wand = await wandController.updateWand(id, updatedWood);
    res.json(wand);
  } catch (error) {
    error.status ? res.status(error.status) : res.status(500);
    res.json({ error: error.message });
  }
}

async function createWand(req, res) {
  try {
    const newWoodData = req.body;
    const wand = await wandController.createWand(newWoodData);
    res.json(wand);
  } catch (error) {
    error.status? res.status(error.status) : res.status(500);
    res.json({ error: error.message });
  }
}

export const functions = {
  getAllWands,
  getWandById,
  deleteWand,
  updateWand,
  createWand,
};

export default functions;
