import coreController from "./coreController.js";

async function getAllCores(req, res) {
    try {
        const cores = await coreController.getAllCores();
        res.json(cores);
    } catch (error) {
        error.status ? res.status(error.status) : res.status(500);
        res.json({ error: error.message });
    }
}

async function getCoreById(req, res) {
    try {
        const core = await coreController.getCoreById(req.params.id);
        res.json(core);
    } catch (error) {
        error.status ? res.status(error.status) : res.status(500);
        res.json({ error: error.message });
    }
}

export const functions = {
    getAllCores,
    getCoreById,
};

export default functions;

