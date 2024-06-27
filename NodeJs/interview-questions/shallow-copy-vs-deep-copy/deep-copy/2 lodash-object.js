const _ = require("lodash");

const obj = {
  a: {
    p: 1,
    q: 2,
  },
  b: 2,
  c: 3,
};

const newObj = _.cloneDeep(obj);

console.log("Before - obj", obj);
console.log("Before - newObj", newObj);

obj["a"]["p"] = 11;

console.log("After - obj", obj);
console.log("After - newObj", newObj);
