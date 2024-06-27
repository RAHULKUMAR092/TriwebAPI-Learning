const getName = async () => {
  throw new Error("Something went wrong");
};

async function main() {
  try {
    const name = await getName();
    console.log("Got the name - ", name);
  } catch (error) {
    console.log("Excpetion handing block - got error", error.message);
  }
}

main();
