import jwt from "jsonwebtoken";
import users from "../../database";
import * as bcrypt from "bcryptjs";

const userLoginService = async (email, password) => {
  const user = users.find((elem) => elem.email === email);

  if (!user) {
    throw new Error("Wrong email/password");
  }

  const passwordMath = await bcrypt.compare(password, user.password);

  if (!passwordMath) {
    throw new Error("Wrong email/password");
  }

  const token = jwt.sign(
    {
      email: user.email,
      isAdm: user.isAdm,
      updatedOn: user.updatedOn,
      createdOn: user.createdOn,
    },
    "SECRET_KEY",
    {
      expiresIn: "1h",
      subject: user.uuid,
    }
  );

  return token;
};

export default userLoginService;
