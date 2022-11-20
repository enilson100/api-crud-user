import listUserProfileService from "../../services/users/listUserProfile.service";
import users from "../../database";
import jwt from "jsonwebtoken";

const listUserProfileController = (req, res) => {
  let token = req.headers.authorization;

  let id = "";

  token = token.split(" ")[1];
  jwt.verify(token, "SECRET_KEY", (error, decoded) => {
    const user = users.find((elem) => elem.email === decoded.email);
    id = user.uuid;
  });

  const lisUserProfile = listUserProfileService(id);

  return res.json(lisUserProfile);
};
export default listUserProfileController;
