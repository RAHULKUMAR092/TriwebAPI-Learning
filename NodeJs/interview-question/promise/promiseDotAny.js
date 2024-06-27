/*
Promise.any(iterable);
It will wait, until one of the promise get fulfilled(means resolve)

*/

function fun1() {
  return new Promise((res, rej) => {
    setTimeout(() => {
      res("Function1");
    }, 1000);
  });
}

function fun2() {
  return new Promise((res, rej) => {
    setTimeout(() => {
      res("Function2");
    }, 2000);
  });
}

function fun3() {
  return new Promise((res, rej) => {
    setTimeout(() => {
      rej("Function3");
    }, 500);
  });
}

Promise.any([fun1(), fun2(), fun3()])
  .then((result) => console.log(result))
  .catch((error) => console.log(error));
