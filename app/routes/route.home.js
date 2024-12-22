import { Router } from "express";
import { controller } from "../controllers/controler.home.js";
import { oauthEmail } from "../oauth.js/auth.js";

const routerHome = Router();

routerHome.get("/", controller.Home);
routerHome.get("/register", controller.Register);
routerHome.get("/forgot-email", controller.forgotPassword);
routerHome.get("/insert-code", oauthEmail ,controller.insetCode);
routerHome.get("/forgot-pasword" ,controller.updatePassword);
routerHome.post("/logout" ,controller.logout);


export default routerHome;
