import _asyncToGenerator from "@babel/runtime/helpers/asyncToGenerator";
import _regeneratorRuntime from "@babel/runtime/regenerator";
var InsertCode = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime.mark(function _callee() {
    var apiUrl, code, options;
    return _regeneratorRuntime.wrap(function _callee$(_context) {
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