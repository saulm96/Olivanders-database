import userController from "./userController.js";

async function getallUsers(req, res) {
  try {
    const users = await userController.getallUsers();
    res.json(users);
  } catch (error) {
    error.status ? res.status(error.status) : res.status(500);
    res.json({ error: error.message });
  }
}

async function getUserById(req, res) {
  try {
    const user = await userController.getUserById(req.params.id);
    res.json(user);
  } catch (error) {
    error.status? res.status(error.status) : res.status(500);
    res.json({ error: error.message });
  }
}





export const functions = {
    getallUsers,
    getUserById,
};

export default functions;
