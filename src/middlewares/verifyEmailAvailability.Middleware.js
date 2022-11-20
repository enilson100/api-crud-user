import users from "../database";

const verifyEmailAvailabilityMiddleware = (req, res, next) => {
  const { email } = req.body;

  const userAlreadyExist = users.find((elem) => elem.email === email);

  if (userAlreadyExist) {
    return res.status(400).json({ message: "This email already exist" });
  }

  next();
};

export default verifyEmailAvailabilityMiddleware;
