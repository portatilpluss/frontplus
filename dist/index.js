import app from "./app.js";
app.listen(app.get('port'), function () {
  console.log("http://localhost:".concat(app.get('port')));
});