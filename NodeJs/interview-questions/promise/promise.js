function fun1() {
  return "Function1";
}

function fun2() {
  return new Promise((res, rej) => {
    // rej("Promise is rejected");
    setTimeout(() => {
      res("Function2");
    }, 1000);
  });
}

function fun3() {
  return "Function3";
}

function startCalling() {
  const res1 = fun1();
  console.log(res1);
  fun2()
    .then((result) => {
      console.log(result);
      const res3 = fun3();
      console.log(res3);
    })
    .catch((error) => {
      console.log("error", error);
    });
}

startCalling();

// Promise.all
