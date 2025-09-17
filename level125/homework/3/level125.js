Promise.resolve("Step 1 done")
  .then(result => {
    return result + " -> Step 2 done";
  })
  .then(result => {
    return result + " -> Step 3 done";
  })
  .then(finalResult => {
    console.log(finalResult);
  });
