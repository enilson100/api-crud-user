import users from "../../database";

const deleteUSerService = (id) => {
  const userIndex = users.findIndex((elem) => elem.uuid === id);

  users.splice(userIndex, 1);

  return {
    message: "User deleted with success",
  };
};
export default deleteUSerService;
