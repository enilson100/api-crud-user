import { Router } from "express";
import userLoginController from "../controller/userLogin.controller";

const loginRoutes = Router();

loginRoutes.post("", userLoginController);

export default loginRoutes;
