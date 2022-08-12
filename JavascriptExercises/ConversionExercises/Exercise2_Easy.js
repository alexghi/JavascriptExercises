const exercise2_easy = {
  initialForm: [
    {
      pokemonName: "Pikachu",
      description: {
        baseHp: 35,
        attack: 55,
        defense: 40,
        weeakAgainst: ["Ground", "Grass", "Dragon"],
        goodAgainst: ["Water", "Flying"],
        level: {
          maxLevel: 40,
          currentLevel: 20,
        },
      },
    },
    {
      pokemonName: "Bulbasaur",
      description: {
        baseHp: 40,
        attack: 35,
        defense: 22,
        weeakAgainst: ["Flying", "Fire", "Psychic "],
        goodAgainst: ["water", "flying"],
        level: {
          maxLevel: 50,
          currentLevel: 10,
        },
      },
    },
  ],
  expectedForm: [
    {
      pokemonName: "Pikachu",

      stats: {
        baseHp: 35,
        attack: 55,
        defense: 40,
      },
      weeakAgainst: ["Ground", "Grass", "Dragon"],
      goodAgainst: ["Water", "Flying"],
      level: {
        maxLevel: 40,
        currentLevel: 20,
      },
    },
    {
      pokemonName: "Bulbasaur",
      description: {
        baseHp: 40,
        attack: 35,
        defense: 22,
      },
      weeakAgainst: ["Flying", "Fire", "Psychic "],
      goodAgainst: ["water", "flying"],
      level: {
        maxLevel: 50,
        currentLevel: 10,
      },
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

addCategory(categories.conversion, exercise2_easy, "Exercise 2 Easy");
