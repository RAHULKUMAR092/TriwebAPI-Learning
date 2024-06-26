
import express from 'express';
import userRoute from './routers/user';
// import{Request,Response} from 'express';


const app = express();

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

app.use('/user',userRoute)




app.listen(process.env.PORT);
