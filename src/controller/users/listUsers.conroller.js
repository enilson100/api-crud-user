import listUsersService from "../../services/users/listUsers.service";

const listUsersController = (req, res) => {
  const listUsers = listUsersService();

  return res.json(listUsers);
};

export default listUsersController;
