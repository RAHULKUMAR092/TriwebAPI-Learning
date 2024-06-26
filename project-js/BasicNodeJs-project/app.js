
const express = require("express");
const userRoute = require('./routers/user')


const app = express();

app.get('/',(req,res)=>{
    // console.log("server start");
    res.send("Hi from server");

});

// app.get('/hello',(req,res)=>{
//     res.send("hello from server");

// });
// app.post('/post',(req,res)=>{
//     res.send("hi i am from post method");
// })

app.use('/user',userRoute)




app.listen(process.env.PORT);
