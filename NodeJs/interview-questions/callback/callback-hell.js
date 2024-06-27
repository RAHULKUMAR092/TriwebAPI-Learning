// What is callback hell

function multiplyBy2(num, callback) {
  callback(2 * num);
}

multiplyBy2(3, (result) => {
  multiplyBy2(result, (result) => {
    multiplyBy2(result, (result) => {
      multiplyBy2(result, (result) => {
        multiplyBy2(result, (result) => {
          multiplyBy2(result, (result) => {
            console.log(result);
          });
        });
      });
    });
  });
});
