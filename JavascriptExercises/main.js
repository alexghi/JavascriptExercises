const mainContainer = document.getElementById("main-container");

function addCategory(category, exercise, name) {
  let categoryElement = document.getElementById(category);

  if (!categoryElement) {
    categoryElement = document.createElement("div");
    categoryElement.id = category;
    mainContainer.appendChild(categoryElement);
  }

  let btn = document.createElement("button");
  btn.innerHTML = name;
  let callback = () => ShowIsCorrect(exercise.execute(exercise.initialForm), exercise.expectedForm);
  btn.addEventListener("click", callback);
  categoryElement.appendChild(btn);
}

var categories = {
  conversion: "conversion",
};
