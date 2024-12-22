"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.oauthEmail = exports.oauth = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _dotenv = require("dotenv");
var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));
(0, _dotenv.config)();
var oauth = exports.oauth = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])(/*#__PURE__*/_regenerator["default"].mark(function _callee(req, res, next) {
    var token, decoded;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          token = req.cookies.token;
          if (token) {
            _context.next = 4;
            break;
          }
          return _context.abrupt("return", res.redirect('/'));
        case 4:
          _context.next = 6;
          return _jsonwebtoken["default"].verify(token, process.env.PRIVATE_KEY);
        case 6:
          decoded = _context.sent;
          req.user = decoded;
          next();
          _context.next = 15;
          break;
        case 11:
          _context.prev = 11;
          _context.t0 = _context["catch"](0);
          console.log(_context.t0);
          return _context.abrupt("return", res.redirect('/'));
        case 15:
        case "end":
          return _context.stop();
      }
    }, _callee, null, [[0, 11]]);
  }));
  return function oauth(_x, _x2, _x3) {
    return _ref.apply(this, arguments);
  };
}();
var oauthEmail = exports.oauthEmail = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])(/*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res, next) {
    var token, decoded;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;
          token = req.cookies.tokenemail;
          if (token) {
            _context2.next = 4;
            break;
          }
          return _context2.abrupt("return", res.redirect('/'));
        case 4:
          _context2.next = 6;
          return _jsonwebtoken["default"].verify(token, process.env.PRIVATE_KEY);
        case 6:
          decoded = _context2.sent;
          req.user = decoded;
          next();
          _context2.next = 15;
          break;
        case 11:
          _context2.prev = 11;
          _context2.t0 = _context2["catch"](0);
          console.log(_context2.t0);
          return _context2.abrupt("return", res.redirect('/'));
        case 15:
        case "end":
          return _context2.stop();
      }
    }, _callee2, null, [[0, 11]]);
  }));
  return function oauthEmail(_x4, _x5, _x6) {
    return _ref2.apply(this, arguments);
  };
}();