const obj = {
  a: {
    p: 1,
    q: 2,
  },
  b: [3, 4, 5],
  c: 3,
};

function deepCopyViaCodeByHeart(src, dest) {
  for (const key in src) {
    if (Array.isArray(src[key])) {
      dest[key] = [];
      deepCopyViaCodeByHeart(src[key], dest[key]);
    } else if (typeof src[key] == "object") {
      dest[key] = {};
      deepCopyViaCodeByHeart(src[key], dest[key]);
    } else {
      dest[key] = src[key];
    }
  }
  return dest;
}

const copiedObject = deepCopyViaCodeByHeart(obj, {});

console.log("Before - obj", obj);
console.log("Before - copiedObject", copiedObject);

obj["a"]["p"] = 11;

console.log("After - obj", obj);
console.log("After - copiedObject", copiedObject);
