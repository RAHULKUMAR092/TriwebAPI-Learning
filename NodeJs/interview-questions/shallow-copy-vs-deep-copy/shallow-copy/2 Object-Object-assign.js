const obj = { a: 1, b: 2, c: 3 };

const newObj = {};

Object.assign(newObj, obj);

console.log("Before - obj", obj);
console.log("Before - newObj", newObj);

obj["a"] = 8;

console.log("After - obj", obj);
console.log("After - newObj", newObj);
