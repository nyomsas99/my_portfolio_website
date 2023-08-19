// my social media
const floating_btn = document.querySelector(".floating-btn");
const close_btn = document.querySelector(".close-btn");
const social_panel_container = document.querySelector(
  ".social-panel-container"
);

floating_btn.addEventListener("click", () => {
  social_panel_container.classList.toggle("visible");
});

close_btn.addEventListener("click", () => {
  social_panel_container.classList.remove("visible");
});

const abt = document.querySelector(".abt");

abt.addEventListener("mouseenter", () => {
  abt.style.backgroundColor = "rgb(100, 50, 120)";
});
