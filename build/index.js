"use strict";

var _express = _interopRequireDefault(require("express"));

var _bodyParser = _interopRequireDefault(require("body-parser"));

var _users = _interopRequireDefault(require("../routes/users.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var PORT = 3000;
var app = new _express["default"]();
app.use(_bodyParser["default"].json());
app.use("/users", _users["default"]);
app.listen(PORT, function () {
  console.log("Server started at ".concat(PORT));
});