const arr = [1, 2, 3];

const newArr = [...arr];

console.log("Before - arr", arr);
console.log("Before - newArr", newArr);

arr[0] = 8;

console.log("After - arr", arr);
console.log("After - newArr", newArr);
