import coreController from "./coreController.js";
import cleanCoreData from "../../helpers/JSONcleaner/coreCleaner.js"


async function getAllCores(req, res) {
    try {
        const cores = await coreController.getAllCores(req.user.language_id);
        const cleanedCore = cleanCoreData(cores);
        res.json(cleanedCore);

    } catch (error) {
        error.status ? res.status(error.status) : res.status(500);
        res.json({ error: error.message });
    }
}

async function getCoreById(req, res) {
    try {
        const core = await coreController.getCoreById(req.params.id, req.user.language_id);
        const cleanedCore = cleanCoreData(core);

        res.json(cleanedCore);
    } catch (error) {
        error.status ? res.status(error.status) : res.status(500);
        res.json({ error: error.message });
    }
}

async function deleteCore(req, res) {
    try {
        const deletedCore = await coreController.deleteCore(req.params.id);
        res.json(`You have deleted the core with id ${req.params.id}`);
    } catch (error) {
        error.status? res.status(error.status) : res.status(500);
        res.json({ error: error.message });
    }
}

async function updateCore(req, res) {
    try {
        const id = parseInt(req.params.id);
        const updatedCore = req.body;

        const core = await coreController.updateCore(id, updatedCore);
        res.json(`You have updated the core with id ${req.params.id}`);
    } catch (error) {
        error.status? res.status(error.status) : res.status(500);
        res.json({ error: error.message });
    }
}

async function createCore(req, res) {
    try {
        const newCoreData = req.body;

        const core = await coreController.createCore(newCoreData);
        res.json(core);
    } catch (error) {
        error.status? res.status(error.status) : res.status(500);
        res.json({ error: error.message });
    }
}


export const functions = {
    getAllCores,
    getCoreById,
    deleteCore,
    updateCore,
    createCore,
};

export default functions;

