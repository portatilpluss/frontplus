import _asyncToGenerator from "@babel/runtime/helpers/asyncToGenerator";
import _regeneratorRuntime from "@babel/runtime/regenerator";
var Register = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime.mark(function _callee() {
    var urlFull, name, lastname, age, phone, email, pasword, idrole, options;
    return _regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          urlFull = document.getElementById("url").getAttribute("data-url");
          name = document.getElementById("name").value;
          lastname = document.getElementById("lastname").value;
          age = document.getElementById("age").value;
          phone = document.getElementById("phone").value;
          email = document.getElementById("email").value;
          pasword = document.getElementById("pasword").value;
          idrole = document.getElementById("rol").value;
          if (!(name == "" || lastname == "" || age == "" || phone == "" || email == "" || pasword == "" || idrole == "")) {
            _context.next = 10;
            break;
          }
          return _context.abrupt("return", Swal.fire("Campos vacios!"));
        case 10:
          options = {
            method: "POST",
            headers: {
              "content-type": "application/json"
            },
            body: JSON.stringify({
              name: name,
              lastname: lastname,
              age: age,
              phone: phone,
              email: email,
              pasword: pasword,
              idrole: idrole
            })
          };
          _context.next = 13;
          return fetch(urlFull, options).then(function (res) {
            return res.json();
          }).then(function (data) {
            if (data.error == true) {
              Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Register Invalid!"
              });
            } else {
              Swal.fire({
                position: "center",
                icon: "success",
                title: "Your work has been saved",
                showConfirmButton: false,
                timer: 1500
              });
              setTimeout(function () {
                window.location.reload();
              }, 1000);
            }
          })["catch"](function (error) {
            console.log("Error fuction", error);
          });
        case 13:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));
  return function Register() {
    return _ref.apply(this, arguments);
  };
}();