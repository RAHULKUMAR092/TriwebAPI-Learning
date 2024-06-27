async function anotherFunction() {
  //   return "data-from-here";
  throw new Error("My custom error!");
}

function tryCatchExample() {
  anotherFunction()
    .then((data) => console.log(data))
    .catch((error) => {
      console.error("Error occurred:", error);
    });
}

tryCatchExample();
