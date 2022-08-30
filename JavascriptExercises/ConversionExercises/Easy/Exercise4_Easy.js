//Normalization
//Normalize the initialForm array values to be between 0 and 1
//To get the normalized values you must divide each number by the bigest number in the array

//Probably most of the time you can see this in charts,
//because they normalize the values to let you see both very big and very small values in the same box without having to zoom out
const exercise4_easy = {
  initialForm: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
  expectedForm: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1],

  //You must convert initialForm object to be the same as expectedForm
  //Use this function
  execute: function (initialForm) {
    const result = [];
    // conversion code here
    return result;
  },
};

addCategory(categories.conversion_easy, exercise4_easy, "Exercise 4 Easy");
