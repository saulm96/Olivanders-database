import translate from "translate";
import dotenv from "dotenv";

dotenv.config();

translate.engine = "deepl";
translate.key = process.env.DEEPL_API_KEY;

export default translate;
