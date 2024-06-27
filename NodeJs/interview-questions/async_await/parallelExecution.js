const getName = async () => {
  return "CodeByHeart";
};

async function main() {
  try {
    console.log("Printing inside main");
    const name = await getName();
    console.log("Got the name - ", name);
  } catch (error) {
    console.log("Excpetion handing block - got error", error.message);
  }
}

console.log("Printing before main");
main();
console.log("Printing after main");
