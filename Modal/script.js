let openBtn = document.querySelector(".open-modal");
let closeBtn = document.querySelector(".close-modal");

let modalClass = document.querySelector(".not-main");
openBtn.addEventListener("click", () => {
  modalClass.classList.add("visible");
});
closeBtn.addEventListener("click", () => {
  modalClass.classList.remove("visible");
});
