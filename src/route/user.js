const express = require("express");
const user = express.Router();
const { register, assign, unassign, common } = require("../controller/user");
const { regisCheck, assignCheck, getCheck } = require("../validator/validate");

user.post("/register", regisCheck, register);
user.post("/assign", assignCheck, assign);
user.post("/unassign", assignCheck, unassign);
user.get("/tasks/common", getCheck, common);

module.exports = user;
