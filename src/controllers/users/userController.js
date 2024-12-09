import userModel from "../../models/userModel.js";
import error from "../../helpers/errors/userErrors.js";
import {hashPassword} from "../../config/bcryptjs.js";



async function getallUsers() {
  const users = await userModel.findAll();

  if (!users) throw new error.USER_LIST_NOT_AVAILABLE();
  return users;
}

async function getUserLanguage(id) {
  const user = await userModel.findByPk(id, {
    attributes: ["language_id"],
  });

  return user.language_id;
}

async function getUserById(id) {
  const user = await userModel.findByPk(id);

  if (!user) throw new error.USER_NOT_FOUND();
  return user;
}

async function deleteUser(id) {
  const user = await userModel.findByPk(id);

  if (!user) throw new error.USER_NOT_FOUND();
  await user.destroy();
  return user;
}

async function updateUser(id, data) {
  const user = await userModel.findByPk(id);

  if (!user) throw new error.USER_NOT_FOUND();
  await user.update(data);
  return user;
}
async function getUserByEmail(email) {
  const user = await userModel.findOne({
     where: 
     { email: email } });

  return user;
}
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
