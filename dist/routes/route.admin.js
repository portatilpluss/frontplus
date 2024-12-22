"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = require("express");
var _controllerAdmin = _interopRequireDefault(require("../controllers/controller.admin.js"));
var _auth = require("../oauth.js/auth.js");
var routeAdmin = (0, _express.Router)();
routeAdmin.get("/admin", _auth.oauth, _controllerAdmin["default"]);
var _default = exports["default"] = routeAdmin;