import woodController from "./woodController.js";

async function getAllWoods(req, res) {
    try {
        const woods = await woodController.getAllWoods();
        res.json(woods);
    } catch (error) {
        error.status ? res.status(error.status) : res.status(500);
        res.json({ error: error.message });
    }
}

async function getWoodById(req, res) {
    try {
        const wood = await woodController.getWoodById(req.params.id);
        res.json(wood);
    } catch (error) {
        error.status ? res.status(error.status) : res.status(500);
        res.json({ error: error.message });
    }
}

export const functions = {
    getAllWoods,
    getWoodById,
};

export default functions;