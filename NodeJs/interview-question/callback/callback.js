// What is callback
function multiplyBy2(num, callback) {
  callback(2 * num);
}

multiplyBy2(3, (result) => {
  console.log(result);
});
