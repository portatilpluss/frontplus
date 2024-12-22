import _asyncToGenerator from "@babel/runtime/helpers/asyncToGenerator";
import _regeneratorRuntime from "@babel/runtime/regenerator";
var forgotEmail = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime.mark(function _callee() {
    var apiUrl, email, options;
    return _regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          apiUrl = document.getElementById('apiFull').getAttribute('data-url');
          email = document.getElementById('email').value;
          if (!(email == '')) {
            _context.next = 4;
            break;
          }
          return _context.abrupt("return", Swal.fire('Error', 'Email is required', 'error'));
        case 4:
          options = {
            method: "POST",
            headers: {
              "content-type": "application/json"
            },
            body: JSON.stringify({
              email: email
            }),
            credentials: 'include'
          };
          _context.next = 7;
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
                window.location.href = '/insert-code';
              }, 2000);
            } else {
              Swal.fire('Error', 'Email not found', 'error');
            }
          });
        case 7:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));
  return function forgotEmail() {
    return _ref.apply(this, arguments);
  };
}();