
import{Request,Response} from 'express';

import {addUserToDb,updateUserData} from '../moduls/user';

const regiterUser =(req:Request,res:Response)=>{
    // fetch data req
    // validation
    // normalize

    const userName ="Rahul";
    const password = "pass";

    const result = addUserToDb(userName,password);

    res.send(result);
}

const updateUser = (req:Request,res:Response)=>{
    const myUser = {
        id:1,
        uname:"Rahul",
        password:"string"


    }
    const result = updateUserData(myUser);
    res.send(result);

}

export {regiterUser,updateUser};
 