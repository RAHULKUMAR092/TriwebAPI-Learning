const obj = {
  a: {
    p: 1,
    q: 2,
  },
  b: 2,
  c: 3,
};

function deepCopyviaCodeByHeart(src, dest) {
  for (const key in src) {
    if (typeof src[key] == "object") {
      dest[key] = {};
      deepCopyviaCodeByHeart(src[key], dest[key]);
    } else {
      dest[key] = src[key];
    }
  }
  return dest;
}

const copiedObject = deepCopyviaCodeByHeart(obj, {});

console.log("Before - obj", obj);
console.log("Before - copiedObject", copiedObject);

obj["a"]["p"] = 11;

console.log("After - obj", obj);
console.log("After - copiedObject", copiedObject);
