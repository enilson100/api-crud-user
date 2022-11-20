import jwt from "jsonwebtoken";
import users from "../database";

const verifyAuthTokenMiddleware = (req, res, next) => {
  let token = req.headers.authorization;

  if (!token) {
    return res.status(401).json({
      message: "Missing authorization headers",
    });
  }

  token = token.split(" ")[1];

  jwt.verify(token, "SECRET_KEY", (error, decoded) => {
    if (error) {
      return res.status(401).json({ message: "Invalid Token" });
    }
    req.user = {
      isAdm: decoded.isAdm,
      uuid: decoded.sub,
      updatedOn: decoded.updatedOn,
      createdOn: decoded.createdOn,
    };

    next();
  });
};

export default verifyAuthTokenMiddleware;
