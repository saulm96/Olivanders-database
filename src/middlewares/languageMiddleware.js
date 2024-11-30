import Language from "../models/languageModel.js";

async function getLanguage(req, res, next) {
  const languageId = req.params.languageId;
  try {
    const language = await Language.findOne({
      where: { language_id: languageId },
    });
    if (language) {
      req.language = language;
      next();
    } else {
      res.status(404).json({ message: "Language not found" });
    }
  } catch (error) {
    res.status(500).json({ message: "processing the language" });
  }
}

export default getLanguage;
