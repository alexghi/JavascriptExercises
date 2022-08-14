const exercise2_medium = {
  initialForm: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
  expectedForm: [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [9, 10],
  ],
  innerArrayLength: 3,

  //You must convert initialForm object to be the same as expectedForm
  //Use this function
  //Play with above variables (initialForm, expectedForm and innerArrayLength) to check if your code works properly in different casses
  //if inner array was 4 the expectedFrom must look like this [[0,1,2,3],[4,5,6,7],[8,9,10]]
  execute: function (initialForm, innerArrayLength) {
    const result = [];
    // conversion code here

    return result;
  },
};

addCategory(categories.conversion_medium, exercise2_medium, "Exercise 2 Medium", [exercise2_medium.innerArrayLength]);
