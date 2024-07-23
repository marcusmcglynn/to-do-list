let addToDoButton = document.getElementById("addToDo");
let toDoContainer = document.getElementById("inputBox");
let inputField = document.getElementById("inputField");

function addItem() {
  var newItem = document.createElement("div");
  newItem.className = "cards";
  newItem.innerHTML = inputField.value;
  toDoContainer.appendChild(newItem);
  inputField.value = "";
  newItem.addEventListener("click", function () {
    if (newItem.style.textDecoration === "line-through") {
      newItem.style.textDecoration = "none";
      newItem.style.color = ""; // Reset to original color
    } else {
      newItem.style.textDecoration = "line-through";
      newItem.style.color = "black";
    }
  });

  newItem.addEventListener("dblclick", function () {
    toDoContainer.removeChild(newItem);
  });
}

addToDoButton.addEventListener("click", addItem);

inputField.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    addItem();
  }
});
