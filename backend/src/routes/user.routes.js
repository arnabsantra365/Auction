import {Router} from "express";
import {loginUser, logoutUser, regUser} from "../controllers/user.controllers.js";
import { verifyToken } from "../middlewares/auth.middleware.js";
const router= Router()

router.route("/register").post(regUser) // this call goes to regUser of user controllerl
// router.route("/login").post(registerUser)
router.route("/login").post(loginUser);

router.route("/logout").post(verifyToken,logoutUser);
export default router;