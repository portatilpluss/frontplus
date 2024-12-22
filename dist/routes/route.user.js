"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = require("express");
var _controllerUser = _interopRequireDefault(require("../controllers/controller.user.js"));
var _auth = require("../oauth.js/auth.js");
var RouteUser = (0, _express.Router)();
RouteUser.get("/user", _auth.oauth, _controllerUser["default"]);
var _default = exports["default"] = RouteUser;