const verifyIsAdmMiddleware = (req, res, next) => {
  const isAdm = req.user.isAdm;
  let { id } = req.params;
  let { uuid } = req.user;

  if (!isAdm) {
    if (id !== uuid) {
      return res.status(401).json({
        message: "Unauthorized",
      });
    }
  }
  next();
};

export default verifyIsAdmMiddleware;
