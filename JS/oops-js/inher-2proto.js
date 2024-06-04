//inheritance using __proto__ real world scenario

//parent object
var user = {
    userName: "",
    password: "",
    isLoggedIn: false,
    login: function() {
      if (this.userName == "system" && this.password == "manager")
      {
        this.isLoggedIn = true;
        return true; //valid login
      }
      else
      {
        this.isLoggedIn = false;
        return false; //invalid login
      }
    } };
  
  //child object (every manager is the user)
  var manager = {
    departmentName: "R&D",
    approveLeaves: function() {
      return "appove leaves";
    },
    dashboard: function() {
      return `${this.userName} dashboard`;
    }
  };
  manager.__proto__ = user;
  
  manager.userName = "system";
  manager.password = "manager";
  console.log(manager.login());
  console.log(manager.departmentName);
  console.log(manager.approveLeaves());
  console.log(manager.dashboard());
  