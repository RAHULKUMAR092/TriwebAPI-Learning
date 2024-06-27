process.on("unhandledRejection", (reason, promise) => {
  console.log("Controlled", reason);
});

function promisRejectHandle() {
  Promise.reject(new Error("My promise rejected"));
}

promisRejectHandle();
