const demonstrateTimeout = () => {
  return new Promise((resolve, reject) => {
    // setTimeout(() => {
    //   console.log("it goes ding when there's stuff");
    // }, 1000);
    resolve();
  })
}

const demonstratePromises = () => {
  demonstrateTimeout()
    .then(() => console.log("doo wee ooh"));
  console.log("wibbly wobbly timey wimey");
}

demonstratePromises();

// try {
//   console.log("The result of 5 + 3 is ", 5 + 3);
//   console.log(jeff);
//   console.log("more stuff");
// }
// catch(error) {
//   console.log("OUR ERROR WAS ", error);
// }
// finally {
//   console.log("our try-catch-finally is done!");
// }