import { Router } from "express";
import dashUser from "../controllers/controller.user.js";
import { oauth } from "../oauth.js/auth.js";
var RouteUser = Router();
RouteUser.get("/user", oauth, dashUser);
export default RouteUser;