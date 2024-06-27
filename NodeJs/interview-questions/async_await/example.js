async function giveMeName() {
  return "CodeByHeart";
}

async function main() {
  const name = await giveMeName();
  console.log("Name is ", name);
}

main();
