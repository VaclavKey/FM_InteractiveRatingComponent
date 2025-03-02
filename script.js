let selectedScore = 0;

document.querySelectorAll(".rating-button").forEach(button => {
  button.addEventListener("click", () => {
    selectedScore = button.textContent;
    document.querySelectorAll(".rating-button").forEach(btn => btn.classList.remove("selected"));
    button.classList.add("selected");
  })
})

document.querySelector(".submit-button").addEventListener("click", () => {
  document.querySelector(".rating-state").style.display = "none";
  document.querySelector(".thank-you-state").style.display = "flex";

  document.querySelector("#score").textContent = selectedScore;
})