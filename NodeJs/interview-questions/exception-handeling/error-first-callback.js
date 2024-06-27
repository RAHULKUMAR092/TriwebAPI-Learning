const fs = require("fs");

function tryErrorFirstCallback() {
  fs.readFile("file.txt", (err, data) => {
    if (err) {
      console.error("Error occured: ", err);
      return;
    }
    console.log(data.toString());
  });
}

tryErrorFirstCallback();
