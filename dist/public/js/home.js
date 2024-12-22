"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var Login = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])(/*#__PURE__*/_regenerator["default"].mark(function _callee() {
    var apiFull, email, pasword, options;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          apiFull = document.getElementById("apiFull").getAttribute("data-url");
          email = document.getElementById("email").value;
          pasword = document.getElementById("pasword").value;
          if (!(email == "" || pasword == "")) {
            _context.next = 5;
            break;
          }
          return _context.abrupt("return", Swal.fire("Campos vacios!"));
        case 5:
          options = {
            method: 'POST',
            headers: {
              'content-type': 'application/json'
            },
            body: JSON.stringify({
              email: email,
              pasword: pasword
            }),
            credentials: 'include'
          };
          _context.next = 8;
          return fetch(apiFull, options).then(function (res) {
            return res.json();
          }).then(function (data) {
            if (data.error == true) {
              Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Password or Email Incorrect!"
              });
            } else {
              Swal.fire({
                icon: "success",
                title: "Login Successful!",
                text: data.message
              });
              setTimeout(function () {
                if (data.payload.idrole === 1) {
                  return window.location.href = "/dash/admin";
                } else if (data.payload.idrole === 2) {
                  return window.location.href = "/dash/user";
                } else {
                  return Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: "Rol Invalid!"
                  });
                }
              }, 1000);
            }
          })["catch"](function (error) {
            console.error('Error fetching data:', error);
          });
        case 8:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));
  return function Login() {
    return _ref.apply(this, arguments);
  };
}();