
const {addUserToDb} = require('../moduls/user');

const regiterUser =(req,res)=>{
    // fetch data req
    // validation
    // normalize

    const userName ="Rahul";
    const password = "pass";

    const result = addUserToDb(userName,password);

    res.send(result);
}

module.exports = {regiterUser};
