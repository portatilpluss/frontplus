"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.controller = void 0;
var _dotenv = require("dotenv");
var _express = require("express");
(0, _dotenv.config)();
var Home = function Home(req, res) {
  var url = process.env.APIURL;
  var urlFull = "".concat(url, "/login");
  res.render("view.home.ejs", {
    urlFull: urlFull
  });
};
var Register = function Register(req, res) {
  var url = process.env.APIURL;
  var urlFull = "".concat(url, "/register");
  res.render("view.register.ejs", {
    urlFull: urlFull
  });
};
var forgotPassword = function forgotPassword(req, res) {
  var url = process.env.APIURL;
  var urlFull = "".concat(url, "/email");
  res.render("view.forgotpasword.ejs", {
    urlFull: urlFull
  });
};
var insetCode = function insetCode(req, res) {
  var url = process.env.APIURL;
  var urlFull = "".concat(url, "/code");
  res.render("view.insertcode.ejs", {
    urlFull: urlFull
  });
};
var updatePassword = function updatePassword(req, res) {
  var url = process.env.APIURL;
  var urlFull = "".concat(url, "/update");
  res.render("viewupdatepassword.ejs", {
    urlFull: urlFull
  });
};
var logout = function logout(req, res) {
  res.clearCookie('token');
  res.redirect('/');
};
var controller = exports.controller = {
  Home: Home,
  Register: Register,
  forgotPassword: forgotPassword,
  insetCode: insetCode,
  updatePassword: updatePassword,
  logout: logout
};