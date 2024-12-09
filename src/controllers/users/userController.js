import userModel from "../../models/userModel.js";
import error from "../../helpers/errors/userErrors.js";
import {hashPassword} from "../../config/bcryptjs.js";



/**
 * Retrieves a list of all users in the database.
 * @returns {Promise<Array<{user_id: number, name: string, last_name: string, birth_date: string, email: string, password: string, language_id: number}>}
 *     Resolves with an array of user objects, each with the given structure.
 * @throws {Error} If the database query fails.
 */
async function getallUsers() {
  const users = await userModel.findAll();

  if (!users) throw new error.USER_LIST_NOT_AVAILABLE();
  return users;
}

/**
 * Retrieves the language ID for a specified user.
 * 
 * @param {number} id - The ID of the user whose language ID is to be retrieved.
 * @returns {Promise<number>} A promise that resolves to the language ID of the user.
 * @throws {Error} If the user is not found in the database.
 */
async function getUserLanguage(id) {
  const user = await userModel.findByPk(id, {
    attributes: ["language_id"],
  });

  return user.language_id;
}

/**
 * Retrieves a single user from the database by ID.
 * @param {number} id - The ID of the user to be retrieved.
 * @returns {Promise<{user_id: number, name: string, last_name: string, birth_date: string, email: string, password: string, language_id: number}>}
 *     A promise that resolves to the user object with the given structure.
 * @throws {Error} If the user is not found in the database.
 */
async function getUserById(id) {
  const user = await userModel.findByPk(id);

  if (!user) throw new error.USER_NOT_FOUND();
  return user;
}

/**
 * Deletes a single user from the database by ID.
 * @param {number} id - The ID of the user to be deleted.
 * @returns {Promise<{user_id: number, name: string, last_name: string, birth_date: string, email: string, password: string, language_id: number}>}
 *     A promise that resolves to the deleted user object with the given structure.
 * @throws {Error} If the user is not found in the database.
 */
async function deleteUser(id) {
  const user = await userModel.findByPk(id);

  if (!user) throw new error.USER_NOT_FOUND();
  await user.destroy();
  return user;
}

/**
 * Updates a user in the database by ID.
 * @param {number} id - The ID of the user to be updated.
 * @param {{name: string, last_name: string, birth_date: string, email: string, password: string, language_id: number}} data - The updated user data.
 * @returns {Promise<{user_id: number, name: string, last_name: string, birth_date: string, email: string, password: string, language_id: number}>}
 *     A promise that resolves to the updated user object with the given structure.
 * @throws {Error} If the user is not found in the database.
 */
async function updateUser(id, data) {
  const user = await userModel.findByPk(id);

  if (!user) throw new error.USER_NOT_FOUND();
  await user.update(data);
  return user;
}

/**
 * Finds a user in the database by email.
 * @param {string} email - The email to search for.
 * @returns {Promise<import("sequelize").Model>} A promise that resolves to the user object if it exists, or null if it does not.
 */
async function getUserByEmail(email) {
  const user = await userModel.findOne({
     where: 
     { email: email } });

  return user;
}

/**
 * Creates a new user in the database.
 * @param {string} name - The name of the new user.
 * @param {string} last_name - The last name of the new user.
 * @param {string} birth_date - The birth date of the new user.
 * @param {string} email - The email of the new user.
 * @param {string} password - The password of the new user.
 * @param {number} language_id - The ID of the language the user wants to use.
 * @returns {Promise<import("sequelize").Model>} A promise that resolves to the created user object.
 * @throws {Error} If any of the required fields are missing.
 * @throws {Error} If a user with the given email already exists.
 */
async function createUser(name, last_name, birth_date, email, password, language_id) {
  if(!name || !last_name || !birth_date || !email || !password || !language_id) throw new error.MISSING_DATA();

  const oldUser = await getUserByEmail(email);
  if(oldUser) throw new error.EMAIL_ALREADY_IN_USE();

  const hash = await hashPassword(password);

  const newUser = await userModel.create({
    name,
    last_name,
    birth_date,
    email,
    password: hash,
    language_id,
  });

  return newUser;
}
export const functions = {
  getallUsers,
  getUserById,
  getUserLanguage,
  getUserByEmail,
  deleteUser,
  updateUser,
  createUser,
};

export default functions;
