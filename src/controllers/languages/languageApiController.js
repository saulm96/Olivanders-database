import languageController from "./languageController.js"

async function getAllLanguages(req, res) {
    try {
        const languages = await languageController.getAllLanguages()
        res.json(languages)
    } catch (error) {
        error.status ? res.status(error.status) : res.status(500)
        res.json({ error: error.message })
    }
}

async function createNewLanguage(req, res) {
    try {
        const newLanguageData = req.body;

        const language = await languageController.createNewLanguage(newLanguageData);
        res.json(language);
    } catch (error) {
        error.status ? res.status(error.status) : res.status(500)
        res.json({ error: error.message })
    }
}
async function deleteLanguage(req, res) {
    try {
        const id = req.params.id;
        const deletedLanguage = await languageController.deleteLanguage(id);
        res.json(deletedLanguage);
    } catch (error) {
        error.status ? res.status(error.status) : res.status(500)
        res.json({ error: error.message })
    }
}


export const functions = {
    getAllLanguages,
    createNewLanguage,
    deleteLanguage,
}

export default functions;   