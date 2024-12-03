import userModel from "../../models/userModel.js";
import error from "../../helpers/errors/userErrors.js";

async function getallUsers() {
  const users = await userModel.findAll();

  if (!users) throw new error.USER_LIST_NOT_AVAILABLE();
  return users;
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

async function createUser(name, last_name, birth_date, email, password) {

  const user = await userModel.create({
    name,
    last_name,
    birth_date,
    email,
    password,
  });

  return user;
}
export const functions = {
  getallUsers,
  getUserById,
  deleteUser,
  updateUser,
  createUser,
};

export default functions;
