
const addUserToDb = (userName:string,password:string)=>{
    console.log(userName,password);

    return "user Registration done";

}
interface User{
    id:number,
    uname:string,
    password:string,
    
}

const updateUserData = (objUser:User):string=>{

    console.log(objUser.uname);

    // return 1;
    //expect
    return "Upadate done";
}

export{addUserToDb, updateUserData}
 