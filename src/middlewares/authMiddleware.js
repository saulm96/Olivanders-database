import jwt from '../config/jwt.js';
import userController from "../controllers/users/userController.js"

async function isAuthenticated(req, res, next) {
    const authorization = req.headers.authorization;
    if (!authorization) {
        return res.status(401).json({ message: 'No token provided' });
    }

    const token = authorization.replace("Bearer ", "");
    const verified = jwt.verify(token);

    if (verified.error) return res.status(401).json({ message: 'incorrect jwt token' });

    const languageId = await userController.getUserLanguage(verified.user_id);

    req.user = {
        user_id: verified.user_id,
        role:verified.role,
        language_id: languageId,
    }

    next();
}

async function isAdmin(req, res, next) {
    const authorization = req.headers.authorization;
    if (!authorization) return res.status(401).json({ message: 'no token provided' });

    const token = authorization.replace("Bearer ", "");
    const verified = jwt.verify(token);

    if (verified.error) return res.status(401).json({ message: 'incorrect jwt token' });

    if (verified.role !== 'admin' || !verified.role) return res.status(403).json({ message: 'you are not an admin' });

    next();
}

export { isAuthenticated, isAdmin };