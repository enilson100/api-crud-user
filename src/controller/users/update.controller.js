import updateUserService from "../../services/users/updateUser.service";

const updateUserController = (req, res) => {
  try {
    const { id } = req.params;
    const { name, email } = req.body;
    let { updatedOn, createdOn, isAdm } = req.user;

    updatedOn = new Date();

    const updatedUser = updateUserService(
      name,
      email,
      updatedOn,
      createdOn,
      isAdm,
      id
    );

    return res.json(updatedUser);
  } catch (error) {
    return res.status(400).json({
      message: error.message,
    });
  }
};
export default updateUserController;
