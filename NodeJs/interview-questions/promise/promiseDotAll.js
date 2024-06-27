// multiple promise
// Wait -> to resolve all the promises
// or to reject one

// Promise.all(iterable)
function function1() {
  return new Promise((res, rej) => {
    setTimeout(() => {
      res("Function1");
    }, 2000);
  });
}

function function2() {
  return new Promise((res, rej) => {
    setTimeout(() => {
      rej("Function2-Rejected");
    }, 1000);
  });
}

function function3() {
  return new Promise((res, rej) => {
    setTimeout(() => {
      res("Function3");
    }, 1000);
  });
}

Promise.all([function1(), function2(), function3()])
  .then((result) => {
    console.log(result);
  })
  .catch((error) => console.log(error));
