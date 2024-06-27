// Promise.allSettled(iterable)

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
      rej("function2");
    }, 1000);
  });
}

function fun3() {
  return new Promise((res, rej) => {
    setTimeout(() => {
      res("function3");
    }, 1000);
  });
}

Promise.allSettled([fun1(), fun2(), fun3()]).then((results) => {
  console.log(results);
});
