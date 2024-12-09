import Language from "../../models/languageModels/languageModel.js"

async function getAllLanguages() {
    const languages = await Language.findAll();
    return languages;
}

async function createNewLanguage(newLanguageData){
    const {name, iso_code} = newLanguageData
    const newLanguage = await Language.create({
        name,
        iso_code
    });
    return newLanguage;
}

async function deleteLanguage(id){
    const language = await Language.findByPk(id);
    if(!language) throw new Error("Language not found");
    await language.destroy();
    return language;
}

export const functions = {
    getAllLanguages,
    createNewLanguage,
    deleteLanguage
}

export default functions;



