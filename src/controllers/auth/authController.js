import userController from "../../controllers/users/userController.js";
import { verifyPassword } from "../../config/bcryptjs.js";
import error from "../../helpers/errors/userErrors.js"

async function register(name, last_name, birth_date, email, password, confirmedPassword) {
    if( password != confirmedPassword) throw new error.PASSWORD_DO_NOT_MATCH;

    const existingUser = await userController.getUserByEmail(email);
    if(existingUser) throw new error.EMAIL_ALREADY_IN_USE;

    const newUser = await userController.createUser(name, last_name, birth_date, email, password)
    return newUser;
}

async function login(email, password){
    const user = await userController.getUserByEmail(email);
    if(!user) throw new error.INCORRECT_EMAIL

    const validPassword = await verifyPassword(password, user.password);
    if(!validPassword) throw new error.INCORRECT_PASSWORD;
    
    return user;
}

export default {
    register,
    login,
}
