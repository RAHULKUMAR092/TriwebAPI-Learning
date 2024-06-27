function anotherFunction() {
  throw new Error("My custom error!");
}

function tryCatchExample() {
  try {
    const value = anotherFunction();
    console.log(value);
  } catch (error) {
    console.error("Error occurred:", error);
  }
}

tryCatchExample();
