// How to solve callback hell with the help of Promise
function multiplyBy2(num) {
  return new Promise((resolve, reject) => {
    resolve(num * 2);
  });
}

multiplyBy2(3)
  .then(multiplyBy2)
  .then(multiplyBy2)
  .then(multiplyBy2)
  .then(multiplyBy2)
  .then(multiplyBy2)
  .then(multiplyBy2)
  .then(multiplyBy2)
  .then(multiplyBy2)
  .then((finalSum) => console.log(finalSum));
