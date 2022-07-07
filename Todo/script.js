const input = document.querySelector(".input-field");

const btn = document.querySelector("button");

const list = document.querySelector(".list");

btn.addEventListener("click", (e) => {
  // No Refrest
  e.preventDefault();

  // Creating and Assinging task
  const task = document.createElement("div");
  task.innerText = input.value;
  task.classList.add("list-item");
  // Appending to DOM
  list.appendChild(task);

  //Clearing value from input
  input.value = "";

  task.addEventListener("click", () => {
    task.remove();
  });
});
