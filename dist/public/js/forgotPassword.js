"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var forgotPassword = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])(/*#__PURE__*/_regenerator["default"].mark(function _callee() {
    var apiFull, paswords, options;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          apiFull = document.getElementById('apiFull').getAttribute('data-url');
          paswords = document.getElementById('pasword').value;
          options = {
            method: 'PUT',
            headers: {
              "content-type": "application/json"
            },
            body: JSON.stringify({
              // email: data.payloadEmail.email,
              pasword: paswords
            }),
            credentials: 'include'
          };
          _context.next = 5;
          return fetch(apiFull, options).then(function (res) {
            return res.json();
          }).then(function (data) {
            console.log(data);
            if (data.error == false) {
              Swal.fire({
                position: "center",
                icon: "success",
                title: "Password Updated",
                text: "Check your email for the new password."
              });
            } else {
              Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Failed to update password!"
              });
            }
          })["catch"](function (error) {
            console.error('Error fetching data:', error);
          });
        case 5:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));
  return function forgotPassword() {
    return _ref.apply(this, arguments);
  };
}();