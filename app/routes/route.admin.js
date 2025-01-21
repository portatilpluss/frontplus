import { Router } from "express";
import { oauth } from "../oauth.js/auth.js";
import { admin } from "../controllers/controller.admin.js";


const routeAdmin = Router();

routeAdmin.get("/admin", oauth ,admin.dashHome);
routeAdmin.get("/employes", oauth ,admin.EmployesAdmin);
routeAdmin.get("/computers", oauth ,admin.ComputersAdmin);
routeAdmin.get("/accesories", oauth ,admin.accesoriesAdmin);
routeAdmin.get("/add-employes",oauth,admin.addAdmin);

export default routeAdmin;