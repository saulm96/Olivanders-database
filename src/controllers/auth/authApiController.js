import authController from "./authController.js";
import jwt from "../../config/jwt.js";

async function register(req, res) {
    try {
        const { name, last_name, birth_date, email, password, confirmedPassword } = req.body;
        const result = await authController.register(name, last_name, birth_date, email, password, confirmedPassword);
        res.json(result);
    } catch (error) {
        console.error(error);
        error.status ? res.status(error.status) : res.status(500);

        res.json({ error: error.message });
    }
}

async function login(req, res) {
    try {
        const { email, password } = req.body;
        const user = await authController.login(email, password);
        const token = jwt.sign({ user_id: user.user_id, role: user.role, language_id: user.language_id });
        res.json({ token });
    } catch (error) {
        console.error(error);
        error.status ? res.status(error.status) : res.status(500);
        res.json({ error: error.message });
    }
}

export default {
    register,
    login,
};