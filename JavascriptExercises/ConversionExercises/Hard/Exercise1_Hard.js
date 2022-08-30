//Convert, you must transform from a flat format into a tree format.
const exercise1_hard = {
  initialForm: [
    {
      id: "zoo_0",
      zooName: "A",
      animalCategory: {
        id: "cat_0",
        name: "birds",
        animal: {
          id: "bird_0",
          name: "Eagle",
        },
      },
    },
    {
      id: "zoo_0",
      zooName: "A",
      animalCategory: {
        id: "cat_0",
        name: "birds",
        animal: {
          id: "bird_1",
          name: "Crow",
        },
      },
    },
    {
      id: "zoo_0",
      zooName: "A",
      animalCategory: {
        id: "cat_1",
        name: "reptiles",
        animal: {
          id: "reptiles_1",
          name: "Snake",
        },
      },
    },
    {
      id: "zoo_1",
      zooName: "B",
      animalCategory: {
        id: "cat_1",
        name: "reptiles",
        animal: {
          id: "reptiles_2",
          name: "Lizard",
        },
      },
    },
    {
      id: "zoo_1",
      zooName: "B",
      animalCategory: {
        id: "cat_2",
        name: "fish",
        animal: {
          id: "fish_0",
          name: "Sea bass",
        },
      },
    },
  ],
  expectedForm: [
    {
      id: "zoo_0",
      zooName: "A",
      animalCategories: [
        {
          id: "cat_0",
          name: "birds",
          animals: [
            {
              id: "bird_0",
              name: "Eagle",
            },
            {
              id: "bird_1",
              name: "Crow",
            },
          ],
        },
        {
          id: "cat_1",
          name: "reptiles_1",
          animals: [
            {
              id: "bird_0",
              name: "Snake",
            },
          ],
        },
      ],
    },
    {
      id: "zoo_1",
      zooName: "B",
      animalCategories: [
        {
          id: "cat_1",
          name: "reptiles",
          animals: [
            {
              id: "reptiles_2",
              name: "Lizard",
            },
          ],
        },
        {
          id: "cat_2",
          name: "fish",
          animals: [
            {
              id: "fish_0",
              name: "Sea bass",
            },
          ],
        },
      ],
    },
  ],
  //You must convert initialForm object to be the same as expectedForm
  //Use this function
  execute: function (initialForm) {
    const result = [];

    return result;
  },
};

addCategory(categories.conversion_hard, exercise1_hard, "Exercise 1 Hard");
