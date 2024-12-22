"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var InsertCode = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])(/*#__PURE__*/_regenerator["default"].mark(function _callee() {
    var apiUrl, code, options;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          apiUrl = document.getElementById('apiFull').getAttribute('data-url');
          code = document.getElementById('code').value;
          options = {
            method: 'POST',
            headers: {
              "content-type": "application/json"
            },
            body: JSON.stringify({
              code: code
            }),
            credentials: 'include'
          };
          _context.next = 5;
          return fetch(apiUrl, options).then(function (res) {
            return res.json();
          }).then(function (data) {
            if (data.error == false) {
              Swal.fire({
                position: "center",
                icon: "success",
                title: "Code Sent",
                showConfirmButton: false,
                timer: 1500
              });
              setTimeout(function () {
                window.location.href = '/forgot-pasword';
              }, 2000);
            } else {
              Swal.fire('Error', 'El código ha expirado', 'error');
            }
          });
        case 5:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));
  return function InsertCode() {
    return _ref.apply(this, arguments);
  };
}();