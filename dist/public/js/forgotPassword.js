import _asyncToGenerator from "@babel/runtime/helpers/asyncToGenerator";
import _regeneratorRuntime from "@babel/runtime/regenerator";
var forgotPassword = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime.mark(function _callee() {
    var apiFull, paswords, options;
    return _regeneratorRuntime.wrap(function _callee$(_context) {
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