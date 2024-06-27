// How to solve callback hell with the help of Async await

function multiplyBy2(num) {
  return new Promise((resolve, reject) => {
    resolve(num * 2);
  });
}

async function awaitExample() {
  const resultFrom1 = await multiplyBy2(3);
  const resultFrom2 = await multiplyBy2(resultFrom1);
  const resultFrom3 = await multiplyBy2(resultFrom2);
  const resultFrom4 = await multiplyBy2(resultFrom3);
  const resultFrom5 = await multiplyBy2(resultFrom4);
  const finalResult = await multiplyBy2(resultFrom5);
  console.log(finalResult);
}

awaitExample().catch((err) => console.log(err));
