import { Router } from "express";
import createUserController from "../controller/users/createUser.controller";
import listUsersController from "../controller/users/listUsers.conroller";
import listUserProfileController from "../controller/users/listUserProfile.controller";
import updateUserController from "../controller/users/update.controller";
import deleteUserController from "../controller/users/deleteUsers.controller";

import verifyEmailAvailabilityMiddleware from "../middlewares/verifyEmailAvailability.Middleware";
import verifyAuthTokenMiddleware from "../middlewares/verifyAuthToken.middleware";
import verifyIsAdmMiddleware from "../middlewares/verifyIsAdm.middleware";

const router = Router();

router.post("", verifyEmailAvailabilityMiddleware, createUserController);
router.get(
  "",
  verifyAuthTokenMiddleware,
  verifyIsAdmMiddleware,
  listUsersController
);
router.get("/profile", verifyAuthTokenMiddleware, listUserProfileController);
router.patch(
  "/:id",
  verifyAuthTokenMiddleware,
  verifyIsAdmMiddleware,
  updateUserController
);
router.delete(
  "/:id",
  verifyAuthTokenMiddleware,
  verifyIsAdmMiddleware,
  deleteUserController
);

export default router;
