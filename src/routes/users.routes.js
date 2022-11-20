import { Router } from "express";
import createUserController from "../controller/createUser.controller";
import listUsersController from "../controller/listUsers.conroller";
import listUserProfileController from "../controller/listUserProfile.controller";
import updateUserController from "../controller/update.controller";
import deleteUserController from "../controller/deleteUsers.controller";

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
