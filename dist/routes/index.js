"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = require("express");
var _routeAdmin = _interopRequireDefault(require("./route.admin.js"));
var _routeHome = _interopRequireDefault(require("./route.home.js"));
var _routeUser = _interopRequireDefault(require("./route.user.js"));
var routes = (0, _express.Router)();
routes.use("/", _routeHome["default"]);
routes.use("/dash", _routeAdmin["default"]);
routes.use("/dash", _routeUser["default"]);
var _default = exports["default"] = routes;