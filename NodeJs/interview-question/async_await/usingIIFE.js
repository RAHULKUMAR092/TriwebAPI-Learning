async function getName() {
  return "Code By Heart";
}

(async () => {
  const name = await getName();
  console.log("Name is ", name);
})();
