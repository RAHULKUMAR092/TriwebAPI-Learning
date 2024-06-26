"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const user_1 = __importDefault(require("./routers/user"));
// import{Request,Response} from 'express';
const app = (0, express_1.default)();
// app.get('/',(req:Request,res:Response)=>{
//     // console.log("server start");
//     res.send("Hi from server");
// });
// app.get('/hello',(req,res)=>{
//     res.send("hello from server");
// });
// app.post('/post',(req,res)=>{
//     res.send("hi i am from post method");
// })
app.use('/user', user_1.default);
app.listen(process.env.PORT);
