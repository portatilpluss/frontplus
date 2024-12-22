import { Router } from "express";
import dashHome from "../controllers/controller.admin.js";
import { oauth } from "../oauth.js/auth.js";
var routeAdmin = Router();
routeAdmin.get("/admin", oauth, dashHome);
export default routeAdmin;