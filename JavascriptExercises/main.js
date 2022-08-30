const mainContainer = document.getElementById("main-container");

function addCategory(category, exercise, name, args) {
  let categoryElement = document.getElementById(category);

  if (!args) args = [];

  if (!categoryElement) {
    categoryElement = document.createElement("div");
    categoryElement.id = category;
    mainContainer.appendChild(categoryElement);
  }

  let btn = document.createElement("button");
  btn.innerHTML = name;
  let callback = () => {
    console.clear();
    ShowIsCorrect(exercise.execute(exercise.initialForm, ...args), exercise);
  };
  btn.addEventListener("click", callback);
  categoryElement.appendChild(btn);
}

var categories = {
  conversion_easy: "conversion_easy",
  conversion_medium: "conversion_medium",
  conversion_hard: "conversion_hard",
};
