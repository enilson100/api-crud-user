import users from "../../database";
import { v4 as uuidv4 } from "uuid";
import * as bcrypt from "bcryptjs";

const createUsersService = async (name, email, password, isAdm) => {
  const hashedPassword = await bcrypt.hash(password, 10);

  const id = uuidv4();

  const newUser = {
    uuid: id,
    createdOn: new Date(),
    updatedOn: new Date(),
    name,
    email,
    password: hashedPassword,
    isAdm,
  };
  users.push(newUser);

  const userWithoutPassword = {
    uuid: id,
    createdOn: new Date(),
    updatedOn: new Date(),
    name,
    email,
    isAdm,
  };

  return userWithoutPassword;
};
export default createUsersService;
