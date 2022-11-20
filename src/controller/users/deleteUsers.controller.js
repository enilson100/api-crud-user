import deleteUSerService from "../../services/users/deleteUser.service";

const deleteUserController = (req, res) => {
  const { id } = req.params;

  const deleteUser = deleteUSerService(id);

  return res.json(deleteUser);
};

export default deleteUserController;
