const input = document.querySelector(".input-field");

const btn = document.querySelector("button");

const list = document.querySelector(".task-list");

btn.addEventListener("click", (e) => {
  // No Refrest
  e.preventDefault();

  // Creating and Assinging task
  const task = document.createElement("div");
  task.innerText = input.value;

  // Appending to DOM
  list.appendChild(task);

  //Clearing value from input
  input.value = "";
});
