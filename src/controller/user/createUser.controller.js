import createUsersService from "../services/users/createUser.service";

const createUserController = async (req, res) => {
  const { name, email, password, isAdm } = req.body;

  const createUser = await createUsersService(name, email, password, isAdm);

  return res.status(201).json(createUser);
};

export default createUserController;
