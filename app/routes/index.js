import { Router } from "express";
import routeAdmin from "./route.admin.js";
import routerHome from "./route.home.js";
import RouteUser from "./route.user.js";

const routes = Router();

routes.use("/", routerHome)
routes.use("/dash", routeAdmin)
routes.use("/dash", RouteUser)


export default routes;