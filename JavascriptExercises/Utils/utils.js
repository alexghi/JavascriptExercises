function ShowIsCorrect(actual, execise) {
  const isCorrect = JSON.stringify(actual) === JSON.stringify(execise.expectedForm);
  if (isCorrect) {
    console.log("Correct");
  } else {
    console.log("Initial");
    console.log(execise.initialForm);
    console.log("Expected");
    console.log(execise.expectedForm);
    console.log("Actual");
    console.log(actual);
  }
}
