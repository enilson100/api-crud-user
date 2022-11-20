import users from "../../database";

const listUserProfileService = (id) => {
  const user = users.find((element) => element.uuid === id);

  const newUser = {
    uuid: user.uuid,
    createdOn: user.createdOn,
    updatedOn: user.updatedOn,
    name: user.name,
    email: user.email,
    isAdm: user.isAdm,
  };

  return newUser;
};

export default listUserProfileService;
