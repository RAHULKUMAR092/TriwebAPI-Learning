// Promise.race(iterable)
// return first res or rej promise
function fun1() {
  return new Promise((res, rej) => {
    setTimeout(() => {
      res("function1");
    }, 2000);
  });
}

function fun2() {
  return new Promise((res, rej) => {
    setTimeout(() => {
      res("function2");
    }, 5000);
  });
}

function fun3() {
  return new Promise((res, rej) => {
    setTimeout(() => {
      rej("function3");
    }, 1000);
  });
}

const listOfPromises = [fun1(), fun2(), fun3()];
Promise.race(listOfPromises)
  .then((result) => {
    console.log("Fulfilled", result);
  })
  .catch((error) => {
    console.log("Rejected", error);
  });
