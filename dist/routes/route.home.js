"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = require("express");
var _controlerHome = require("../controllers/controler.home.js");
var _auth = require("../oauth.js/auth.js");
var routerHome = (0, _express.Router)();
routerHome.get("/", _controlerHome.controller.Home);
routerHome.get("/register", _controlerHome.controller.Register);
routerHome.get("/forgot-email", _controlerHome.controller.forgotPassword);
routerHome.get("/insert-code", _auth.oauthEmail, _controlerHome.controller.insetCode);
routerHome.get("/forgot-pasword", _controlerHome.controller.updatePassword);
routerHome.post("/logout", _controlerHome.controller.logout);
var _default = exports["default"] = routerHome;