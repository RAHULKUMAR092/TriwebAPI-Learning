"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateUser = exports.regiterUser = void 0;
const user_1 = require("../moduls/user");
const regiterUser = (req, res) => {
    // fetch data req
    // validation
    // normalize
    const userName = "Rahul";
    const password = "pass";
    const result = (0, user_1.addUserToDb)(userName, password);
    res.send(result);
};
exports.regiterUser = regiterUser;
const updateUser = (req, res) => {
    const myUser = {
        id: 1,
        uname: "Rahul",
        password: "string"
    };
    const result = (0, user_1.updateUserData)(myUser);
    res.send(result);
};
exports.updateUser = updateUser;
