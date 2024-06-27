async function anotherFunction() {
  //   return "some value";
  throw new Error("My custom error!");
}

async function tryCatchExample() {
  try {
    const value = await anotherFunction();
    console.log(value);
  } catch (error) {
    console.error("Error occurred:", error);
  }
}

tryCatchExample();
