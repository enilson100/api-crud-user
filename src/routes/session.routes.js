import { Router } from "express";
import userLoginController from "../controller/session/userLogin.controller";

const loginRoutes = Router();

loginRoutes.post("", userLoginController);

export default loginRoutes;
