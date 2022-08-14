const exercise1_easy = {
  initialForm: [
    {
      name: "A",
      age: {
        value: 23,
      },
    },
    {
      name: "B",
      age: {
        value: 29,
      },
    },
    {
      name: "C",
      age: {
        value: 30,
      },
    },
  ],
  expectedForm: [
    {
      name: "A",
      age: 23,
    },
    {
      name: "B",
      age: 29,
    },
    {
      name: "C",
      age: 30,
    },
  ],

  //You must convert initialForm object to be the same as expectedForm
  //Use this function
  execute: function (initialForm) {
    const result = [];
    // conversion code here

    return result;
  },
};

addCategory(categories.conversion_easy, exercise1_easy, "Exercise 1 Easy");
