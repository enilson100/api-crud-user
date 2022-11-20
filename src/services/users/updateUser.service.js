import users from "../../database";

const updateUserService = (name, email, updatedOn, createdOn, isAdm, uuid) => {
  const updateUser = {
    uuid,
    name,
    email,
    isAdm,
    updatedOn,
    createdOn,
  };

  const userIndex = users.findIndex((user) => user.uuid === uuid);

  if (userIndex === -1) {
    throw new Error("User not found");
  }

  users[userIndex] = { ...users[userIndex], ...updateUser };

  return updateUser;
};

export default updateUserService;
