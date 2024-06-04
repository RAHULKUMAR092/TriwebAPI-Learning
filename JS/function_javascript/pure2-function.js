// pure function 
// username system, password:123


let isValidLogin = function(userName, password){
    

    if(userName == "system" && password == "123")
        return true;
        else
        return false;
}
console.log(isValidLogin("system","123"));