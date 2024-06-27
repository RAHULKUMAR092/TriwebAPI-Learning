const arr = [{ a: 1, b: 2 }, [4, 5, 6], [7, 8, 9]];

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

const copiedArr = deepCopyViaCodeByHeart(arr, []);

console.log("Before - arr", arr);
console.log("Before - copiedArr", copiedArr);

arr[0]["a"] = 11;

console.log("After - arr", arr);
console.log("After - copiedArr", copiedArr);
