import userModel from "../../models/userModel.js";
import error from "../../helpers/errors/userErrors.js";

async function getallUsers() {
  const users = await userModel.findAll();

  if(!users) throw new error.USER_LIST_NOT_AVAILABLE;
  return users;
}

async function getUserById(id) {
  const user = await userModel.findByPk(id);

  if(!user) throw new error.USER_NOT_FOUND;
  return user;
}






export const functions = {
    getallUsers,
    getUserById,
};

export default functions;