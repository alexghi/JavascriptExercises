function ShowIsCorrect(actual, expected) {
  const isCorrect = JSON.stringify(actual) === JSON.stringify(expected);
  console.clear();
  if (isCorrect) {
    console.log("Correct");
  } else {
    console.log("Expected");
    console.log(expected);
    console.log("Actual");
    console.log(actual);
  }
}
