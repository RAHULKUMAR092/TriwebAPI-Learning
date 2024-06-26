"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateUserData = exports.addUserToDb = void 0;
const addUserToDb = (userName, password) => {
    console.log(userName, password);
    return "user Registration done";
};
exports.addUserToDb = addUserToDb;
const updateUserData = (objUser) => {
    console.log(objUser.uname);
    // return 1;
    //expect
    return "Upadate done";
};
exports.updateUserData = updateUserData;
