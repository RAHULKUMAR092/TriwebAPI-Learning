process.on("uncaughtException", (error) => {
  console.log("Controlled", error);
});

function anotherFunction() {
  //   return "some value";
  throw new Error("My custom error!");
}

function tryCatchExample() {
  const value = anotherFunction();
  console.log(value);
}

tryCatchExample();
