"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = _interopRequireDefault(require("express"));
var _dotenv = require("dotenv");
var _index = _interopRequireDefault(require("./routes/index.js"));
var _cookieParser = _interopRequireDefault(require("cookie-parser"));
var _ejs = _interopRequireDefault(require("ejs"));
var _url = require("url");
var _path = _interopRequireDefault(require("path"));
(0, _dotenv.config)();
var _filename = (0, _url.fileURLToPath)(import.meta.url);
var _dirname = _path["default"].dirname(_filename);
var app = (0, _express["default"])();
app.set('view engine', 'ejs');
app.set("views", _path["default"].join(_dirname, "views"));
app.use(_express["default"]["static"](_path["default"].join(_dirname, "public")));
app.use((0, _cookieParser["default"])());
// Routes
app.use("/", _index["default"]);
app.use("/", function (req, res) {
  res.render("view.error.ejs");
});
app.set('port', process.env.PORT);
var _default = exports["default"] = app;