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
    error.status ? res.status(error.status) : res.status(500);
    res.json({ error: error.message });
  }
}

async function deleteUser(req, res) {
  try {
    const id = parseInt(req.params.id);
    if (!Number.isInteger(id)) {
      throw new Error("Invalid user ID");
    }
    const deletedUser = await userController.deleteUser(id);
    res.json(deletedUser);
  } catch (error) {
    error.status ? res.status(error.status) : res.status(500);
    res.json({ error: error.message });
  }
}

async function updateUser(req, res) {
  try {
    const id = parseInt(req.params.id);
    if (!Number.isInteger(id)) {
      throw new Error("Invalid user ID");
    }
    const updatedUser = await userController.updateUser(id, req.body);
    res.json(updatedUser);
  } catch (error) {
    error.status ? res.status(error.status) : res.status(500);
    res.json({ error: error.message });
  }
}

async function createUser(req, res) {
  try {
    const createdUser = await userController.createUser(
      req.body.name,
      req.body.last_name,
      req.body.birth_date,
      req.body.email,
      req.body.password
    );
    res.json(createdUser);
  } catch (error) {
    error.status? res.status(error.status) : res.status(500);
    res.json({ error: error.message });
  }
}


export const functions = {
  getallUsers,
  getUserById,
  deleteUser,
  updateUser,
  createUser,
};

export default functions;
